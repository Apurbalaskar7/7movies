var c_cache = [],
    dle_poll_voted = [];

function reload() {
    var e = (new Date).getTime();
    document.getElementById("dle-captcha").innerHTML = '<img src="' + dle_root + "engine/modules/antibot/antibot.php?rndval=" + e + '" width="160" height="80" alt="" />'
}

function dle_change_sort(e, o) {
    var t = document.getElementById("news_set_sort");
    return t.dlenewssortby.value = e, t.dledirection.value = o, t.submit(), !1
}

function doPoll(e, o) {
    var t = document.getElementById("dlepollform_" + o),
        i = t.status.value,
        n = "";
    if (1 != dle_poll_voted[o]) {
        if ("results" != e && 1 != i) {
            for (var d = 0; d < t.elements.length; d++) {
                var l = t.elements[d];
                if ("radio" == l.type && 1 == l.checked) {
                    n = l.value;
                    break
                }
                "checkbox" == l.type && 1 == l.checked && (n = n + l.value + " ")
            }
            if ("vote" == e && "" == n) return;
            dle_poll_voted[o] = 1
        } else i = 1, t.status.value = 1;
        1 == i && "vote" == e && (i = 0, t.status.value = 0, e = "list"), ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=poll", {
            news_id: o,
            action: e,
            answer: n,
            dle_skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""), $("#dle-poll-list-" + o).fadeOut(500, function() {
                $(this).html(e), $(this).fadeIn(500)
            })
        })
    }
}

function IPMenu(e, o, t, i) {
    var n = [];
    return n[0] = '<a href="https://www.nic.ru/whois/?searchWord=' + e + '" target="_blank">' + o + "</a>", n[1] = '<a href="' + dle_root + dle_admin + "?mod=iptools&ip=" + e + '" target="_blank">' + t + "</a>", n[2] = '<a href="' + dle_root + dle_admin + "?mod=blockip&ip=" + e + '" target="_blank">' + i + "</a>", n
}

function ajax_save_for_edit(e, o) {
    var t = {};
    return "2" == quick_wysiwyg && tinyMCE.triggerSave(), $.each($("#ajaxnews" + e).serializeArray(), function(e, o) {
        t[o.name] = o.value
    }), t.id = e, t.field = o, t.action = "save", t.user_hash = dle_login_hash, ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=editnews", t, function(e) {
        HideLoading(""), "ok" != e ? DLEalert(e, dle_info) : ($("#dlepopup-news-edit").dialog("close"), DLEconfirm(dle_save_ok, dle_confirm, function() {
            location.reload(!0)
        }))
    }), !1
}

function ajax_prep_for_edit(d, l) {
    for (var e = 0, o = c_cache.length; e < o; e++) e in c_cache && (c_cache[e] || "" != c_cache[e]) && ajax_cancel_comm_edit(e);
    return ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=editnews", {
        id: d,
        field: l,
        action: "edit"
    }, function(e) {
        HideLoading("");
        var t = "none";
        $("#modal-overlay").remove(), $("body").prepend('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>'), $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn();
        var o = {};
        o[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }, o[dle_act_lang[4]] = function() {
            ajax_save_for_edit(d, l)
        }, $("#dlepopup-news-edit").remove(), $("body").prepend("<div id='dlepopup-news-edit' class='dlepopupnewsedit' title='" + menu_short + "' style='display:none'></div>"), $(".dlepopupnewsedit").html("");
        var i = .9 * $(window).height(),
            n = .9 * $(window).width();
        1024 < n && (n = 1024), $("#dlepopup-news-edit").dialog({
            autoOpen: !0,
            width: n,
            height: i,
            buttons: o,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-quickedit",
            dragStart: function(e, o) {
                t = $(".modalfixed").css("box-shadow"), $(".modalfixed").css("box-shadow", "none")
            },
            dragStop: function(e, o) {
                $(".modalfixed").css("box-shadow", t)
            },
            close: function(e, o) {
                $(this).dialog("destroy"), $("#modal-overlay").fadeOut(function() {
                    $("#modal-overlay").remove()
                })
            }
        }), 830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), $("#dlepopup-news-edit").dialog("option", "position", ["0", "0"])), $("#dlepopup-news-edit").css({
            overflow: "auto"
        }), $("#dlepopup-news-edit").css({
            "overflow-x": "hidden"
        }), $("#dlepopup-news-edit").html(e)
    }, "html"), !1
}

function ajax_comm_edit(o, e) {
    for (var t = 0, i = c_cache.length; t < i; t++) t in c_cache && "" != c_cache[t] && ajax_cancel_comm_edit(t);
    return c_cache[o] && "" != c_cache[o] || (c_cache[o] = $("#comm-id-" + o).html()), ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=editcomments", {
        id: o,
        area: e,
        action: "edit"
    }, function(e) {
        HideLoading(""), $("#comm-id-" + o).html(e), setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#comm-id-" + o).offset().top - 100
            }, 700)
        }, 100)
    }, "html"), !1
}

function ajax_cancel_comm_edit(e) {
    return "" != c_cache[e] && $("#comm-id-" + e).html(c_cache[e]), c_cache[e] = "", !1
}

function ajax_save_comm_edit(o, e) {
    "2" == dle_wysiwyg && tinyMCE.triggerSave();
    var t = $("#dleeditcomments" + o).val();
    return ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=editcomments", {
        id: o,
        comm_txt: t,
        area: e,
        action: "save",
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), c_cache[o] = "", $("#comm-id-" + o).html(e)
    }), !1
}

function DeleteComments(e, o) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=deletecomments", {
            id: e,
            dle_allow_hash: o
        }, function(e) {
            var o;
            HideLoading(""), e = parseInt(e), isNaN(e) || (o = null, o = "1" == dle_tree_comm ? $("#comments-tree-item-" + e) : $("#comment-id-" + e), $("html,body").stop().animate({
                scrollTop: o.offset().top - 70
            }, 700), setTimeout(function() {
                o.hide("blind", {}, 1400)
            }, 700))
        })
    })
}

function MarkSpam(e, o) {
    DLEconfirm(dle_spam_agree, dle_confirm, function() {
        ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            id: e,
            action: "commentsspam",
            user_hash: o
        }, function(e) {
            HideLoading(""), "error" != e && DLEconfirm(e, dle_confirm, function() {
                location.reload(!0)
            })
        })
    })
}

function doFavorites(o, e, t) {
    return ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=favorites", {
        fav_id: o,
        action: e,
        skin: dle_skin,
        alert: t,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), t ? DLEalert(e, dle_info) : $("#fav-id-" + o).html(e)
    }), !1
}

function CheckLogin() {
    var e = document.getElementById("name").value;
    return ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=registration", {
        name: e,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), $("#result-registration").html(e)
    }), !1
}

function doCalendar(e, o, t) {
    ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=calendar", {
        month: e,
        year: o
    }, function(e) {
        HideLoading(""), "left" == t ? $("#calendar-layer").hide("slide", {
            direction: "left"
        }, 500, function() {
            $("#calendar-layer").html(e).show("slide", {
                direction: "right"
            }, 500)
        }) : $("#calendar-layer").hide("slide", {
            direction: "right"
        }, 500, function() {
            $("#calendar-layer").html(e).show("slide", {
                direction: "left"
            }, 500)
        })
    })
}

function doRate(e, t) {
    ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=rating", {
        go_rate: e,
        news_id: t,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        var o;
        HideLoading(""), e.success ? (o = (o = (o = (o = e.rating).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&"), $("#ratig-layer-" + t).html(o), $("#vote-num-id-" + t).html(e.votenum)) : e.error && DLEalert(e.errorinfo, dle_info)
    }, "json")
}

function doCommentsRate(e, t) {
    ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=ratingcomments", {
        go_rate: e,
        c_id: t,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        var o;
        HideLoading(""), e.success ? (o = (o = (o = (o = e.rating).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&"), $("#comments-ratig-layer-" + t).html(o), $("#comments-vote-num-id-" + t).html(e.votenum)) : e.error && DLEalert(e.errorinfo, dle_info)
    }, "json")
}

function ajax_cancel_reply() {
    $("#dlefastreplycomments").hide("blind", {}, 1400)
}

function ajax_fast_reply(o, e) {
    var t = $("#comments" + o).val(),
        i = $("#name" + o).val(),
        n = $("#question_answer" + o).val(),
        d = $("#sec_code" + o).val(),
        l = $("#recaptcha" + o).val(),
        a = $("#subscribe" + o + ":checked").val(),
        s = $("#postid" + o).val(),
        r = "";
    return "" == i || "" == t ? DLEalert(dle_req_field, dle_info) : (l && (r = grecaptcha.getResponse(recaptcha_widget)), a = a || 0, d = d || "", n = n || "", ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
        post_id: s,
        parent: o,
        indent: e,
        comments: t,
        name: i,
        mail: "",
        editor_mode: "",
        skin: dle_skin,
        sec_code: d,
        question_answer: n,
        g_recaptcha_response: r,
        allow_subscribe: a,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), $("#blind-animation" + o).remove(), $("#dlefastreplyesponse").html(e), "error" != e && document.getElementById("blind-animation" + o) && ($("html,body").stop().animate({
            scrollTop: $("#dlefastreplyesponse").offset().top - 100
        }, 600), setTimeout(function() {
            $("#blind-animation" + o).show("blind", {}, 700), $("#dlefastreplycomments").hide("blind", {}, 700)
        }, 600))
    }, "html")), !1
}

function DLESendPM(e) {
    var o = {};
    return $("#dlesendpmpopup").remove(), $("#dleprofilepopup").remove(), o[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }, o[dle_p_send] = function() {
        "2" == dle_wysiwyg && tinyMCE.triggerSave();
        var e = $("#pm_subj").val(),
            o = $("#pm_text").val(),
            t = $("#pm_name").val(),
            i = $("#pm_question_answer").val(),
            n = $("#sec_code_pm").val(),
            d = $("#pm_recaptcha").val(),
            l = $("#outboxcopy:checked").val(),
            a = "";
        return "" == t || "" == o || "" == e ? DLEalert(dle_req_field, dle_info) : (d && (a = grecaptcha.getResponse(recaptcha_widget)), l = l || 0, n = n || "", i = i || "", ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=pm", {
            action: "send_pm",
            subj: e,
            comments: o,
            name: t,
            skin: dle_skin,
            sec_code: n,
            question_answer: i,
            g_recaptcha_response: a,
            outboxcopy: l,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""), e.success ? ($("#dlesendpmpopup").remove(), DLEalert(e.success, dle_info)) : e.error && DLEalert(e.error, dle_info)
        }, "json")), !1
    }, ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=pm", {
        name: e,
        action: "show_send",
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), $("body").append(e), $("#dlesendpmpopup").dialog({
            autoOpen: !0,
            width: 800,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-sendpm",
            buttons: o
        }), $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), $("#dlesendpmpopup").dialog("option", "position", ["0", "0"])
    }, "html"), !1
}

function dle_reply(r, p, o) {
    var t = {},
        c = "";
    return $("#dlereplypopup").remove(), "1" == o && ($("#dlefastreplycomments").remove(), $("#dlefastreplyesponse").remove()), t[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }, t[dle_p_send] = function() {
        "1" != dle_wysiwyg && "2" != dle_wysiwyg || ("2" == dle_wysiwyg && tinyMCE.triggerSave(), c = "wysiwyg");
        var e = $("#comments" + r).val(),
            o = $("#name" + r).val(),
            t = $("#mail" + r).val(),
            i = $("#question_answer" + r).val(),
            n = $("#sec_code" + r).val(),
            d = $("#recaptcha" + r).val(),
            l = $("#subscribe" + r + ":checked").val(),
            a = $("#postid" + r).val(),
            s = "";
        return "" == o || "" == e ? DLEalert(dle_req_field, dle_info) : (d && (s = grecaptcha.getResponse(recaptcha_widget)), l = l || 0, n = n || "", i = i || "", ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
            post_id: a,
            parent: r,
            indent: p,
            comments: e,
            name: o,
            mail: t,
            editor_mode: c,
            skin: dle_skin,
            sec_code: n,
            question_answer: i,
            g_recaptcha_response: s,
            allow_subscribe: l,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""), $("#blind-animation" + r).remove(), $("#comments-tree-item-" + r).length ? ($("#comments-tree-item-" + r).append(e), "error" != e && document.getElementById("blind-animation" + r) && ($("#dlereplypopup").remove(), $("html,body").stop().animate({
                scrollTop: $("#comments-tree-item-" + r).offset().top + $("#comments-tree-item-" + r).height() - 100
            }, 600), setTimeout(function() {
                $("#blind-animation" + r).show("blind", {}, 700)
            }, 600))) : $("#comment-id-" + r).length && ($("#comment-id-" + r).append(e), "error" != e && document.getElementById("blind-animation" + r) && ($("#dlereplypopup").remove(), $("html,body").stop().animate({
                scrollTop: $("#comment-id-" + r).offset().top + $("#comment-id-" + r).height() - 100
            }, 600), setTimeout(function() {
                $("#blind-animation" + r).show("blind", {}, 700)
            }, 600)))
        }, "html")), !1
    }, ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=replycomments", {
        id: r,
        indent: p,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), "1" == o ? ($("#comment-id-" + r).append("<div id='dlefastreplyesponse'></div><div id='dlefastreplycomments' style='display:none'></div>"), $("#dlefastreplycomments").html(e), $("html,body").stop().animate({
            scrollTop: $("#comment-id-" + r).offset().top + $("#comment-id-" + r).height() - 100
        }, 600), setTimeout(function() {
            $("#dlefastreplycomments").show("blind", {}, 700)
        }, 600)) : ($("body").append("<div id='dlereplypopup' title='" + dle_reply_title + "' style='display:none'></div>"), $("#dlereplypopup").html(e), $("#dlereplypopup").dialog({
            autoOpen: !0,
            width: 800,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-replycomments",
            buttons: t
        }), $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), $("#dlereplypopup").dialog("option", "position", ["0", "0"]))
    }, "html"), !1
}

function doAddComments() {
    var o = document.getElementById("dle-comments-form"),
        e = "",
        t = "",
        i = "",
        n = "",
        d = "0",
        l = "";
    return "1" != dle_wysiwyg && "2" != dle_wysiwyg || ("2" == dle_wysiwyg && tinyMCE.triggerSave(), e = "wysiwyg"), "" == o.comments.value || "" == o.name.value ? DLEalert(dle_req_field, dle_info) : (o.question_answer && (t = o.question_answer.value), o.sec_code && (i = o.sec_code.value), "undefined" != typeof grecaptcha && (n = grecaptcha.getResponse()), o.allow_subscribe && 1 == o.allow_subscribe.checked && (d = "1"), o.mail && (l = o.mail.value), ShowLoading(""), $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
        post_id: o.post_id.value,
        comments: o.comments.value,
        name: o.name.value,
        mail: l,
        editor_mode: e,
        skin: dle_skin,
        sec_code: i,
        question_answer: t,
        g_recaptcha_response: n,
        allow_subscribe: d,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), $("#dle-ajax-comments").html(e), "error" != e && document.getElementById("blind-animation") && ($("html,body").stop().animate({
            scrollTop: $("#dle-ajax-comments").offset().top - 100
        }, 600), setTimeout(function() {
            $("#blind-animation").show("blind", {}, 700)
        }, 600), o.sec_code && (o.sec_code.value = "", reload()), "undefined" != typeof grecaptcha && grecaptcha.reset())
    }, "html")), !1
}

function isHistoryApiAvailable() {
    return !(!window.history || !history.pushState)
}

function CommentsPage(o, t, i) {
    return ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=comments", {
        cstart: o,
        news_id: t,
        skin: dle_skin
    }, function(e) {
        HideLoading(""), isNaN(o) || isNaN(t) || ($("#dle-comm-link").off("click"), $("#dle-comm-link").on("click", function() {
            return CommentsPage(o, t), !1
        })), scroll(0, $("#dle-comments-list").offset().top - 100), $("#dle-comments-list").html(e.comments), $(".dle-comments-navigation").html(e.navigation), isHistoryApiAvailable() && window.history.pushState(null, null, i)
    }, "json"), !1
}

function dle_copy_quote(e) {
    dle_txt = "", window.getSelection ? dle_txt = window.getSelection() : document.selection && (dle_txt = document.selection.createRange().text), "" != dle_txt && (dle_txt = "[quote=" + e + "]" + dle_txt + "[/quote]")
}

function dle_fastreply(e) {
    if (!document.getElementById("dle-comments-form")) return !1;
    var o, t = document.getElementById("dle-comments-form").comments;
    return "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (t.value = "0" == dle_wysiwyg ? t.value + "[b]" + e + "[/b],\n" : t.value + (e + ",\n"), t.focus()) : (o = "<b>" + e + "</b>,<br />", "1" == dle_wysiwyg ? ($("#comments").froalaEditor("events.focus"), $("#comments").froalaEditor("html.insert", o, !0)) : tinyMCE.execCommand("mceInsertContent", !1, o)), setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $("#dle-comments-form").offset().top - 100
        }, 700)
    }, 100), !1
}

function dle_ins(e) {
    if (!document.getElementById("dle-comments-form")) return !1;
    var o = document.getElementById("dle-comments-form").comments,
        t = "";
    return "" != dle_txt ? ("0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (o.value += dle_txt + "\n", o.focus()) : (t = dle_txt + "<br />", "1" == dle_wysiwyg ? ($("#comments").froalaEditor("events.focus"), $("#comments").froalaEditor("html.insert", t, !0)) : tinyMCE.execCommand("mceInsertContent", !1, t)), setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $("#dle-comments-form").offset().top - 100
        }, 700)
    }, 100)) : (ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=quote", {
        id: e,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), e = (e = (e = (e = (e = (e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&")).replace(/&quot;/g, '"')).replace(/&#039;/g, "'")).replace(/&#039;/g, "'")).replace(/&#34;/g, '"'), "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (o.value += e + "\n", o.focus()) : (t = e + "<br />", "1" == dle_wysiwyg ? ($("#comments").froalaEditor("events.focus"), $("#comments").froalaEditor("html.insert", t, !0)) : tinyMCE.execCommand("mceInsertContent", !1, t)), setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#dle-comments-form").offset().top - 100
            }, 700)
        }, 100)
    })), !1
}

function ShowOrHide(e) {
    var o = $("#" + e),
        t = null;
    document.getElementById("image-" + e) && (t = document.getElementById("image-" + e)), 3e3 < (e = o.height() / 200 * 1e3) && (e = 3e3), e < 250 && (e = 250), "none" == o.css("display") ? (o.show("blind", {}, e), t && (t.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-minus.gif")) : (2e3 < e && (e = 2e3), o.hide("blind", {}, e), t && (t.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-plus.gif"))
}

function ckeck_uncheck_all() {
    for (var e = document.pmlist, o = 0; o < e.elements.length; o++) {
        var t = e.elements[o];
        "checkbox" == t.type && (t.checked = 1 != e.master_box.checked)
    }
    e.master_box.checked = 1 != e.master_box.checked
}

function confirmDelete(e) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        document.location = e
    })
}

function setNewField(e, o) {
    e != selField && (fombj = o, selField = e)
}

function dle_news_delete(o) {
    var e = {};
    e[dle_act_lang[1]] = function() {
        $(this).dialog("close")
    }, allow_dle_delete_news && (e[dle_del_msg] = function() {
        $(this).dialog("close");
        var e = {};
        e[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }, e[dle_p_send] = function() {
            var e;
            $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(), $(this).dialog("close"), $("#dlepopup").remove(), $.post(dle_root + "engine/ajax/controller.php?mod=message", {
                id: o,
                user_hash: dle_login_hash,
                text: e
            }, function(e) {
                "ok" == e ? document.location = dle_root + "index.php?do=deletenews&id=" + o + "&hash=" + dle_login_hash : DLEalert("Send Error", dle_info)
            }))
        }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_notice + "' style='display:none'>" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px;'></textarea></div>"), $("#dlepopup").dialog({
            autoOpen: !0,
            width: 500,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-newsdelete",
            buttons: e
        }), $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), $("#dlepopup").dialog("option", "position", ["0", "0"])
    }), e[dle_act_lang[0]] = function() {
        $(this).dialog("close"), document.location = dle_root + "index.php?do=deletenews&id=" + o + "&hash=" + dle_login_hash
    }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_confirm + "' style='display:none'><div id='dlepopupmessage'>" + dle_del_agree + "</div></div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-newsdelete",
        buttons: e
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"])
}

function MenuNewsBuild(e, o) {
    var t = [];
    return t[0] = "<a onclick=\"ajax_prep_for_edit('" + e + "', '" + o + '\'); return false;" href="#">' + menu_short + "</a>", "" != dle_admin && (t[1] = '<a href="' + dle_root + dle_admin + "?mod=editnews&action=editnews&id=" + e + '" target="_blank">' + menu_full + "</a>"), allow_dle_delete_news && (t[2] = "<a onclick=\"sendNotice ('" + e + '\'); return false;" href="#">' + dle_notice + "</a>", t[3] = "<a onclick=\"dle_news_delete ('" + e + '\'); return false;" href="#">' + dle_del_news + "</a>"), t
}

function sendNotice(o) {
    var e = {};
    e[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }, e[dle_p_send] = function() {
        var e;
        $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(), $(this).dialog("close"), $("#dlepopup").remove(), $.post(dle_root + "engine/ajax/controller.php?mod=message", {
            id: o,
            user_hash: dle_login_hash,
            text: e,
            allowdelete: "no"
        }, function(e) {
            "ok" == e && DLEalert(dle_p_send_ok, dle_info)
        }))
    }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' title='" + dle_notice + "' style='display:none'><br />" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px;'></textarea></div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-sendmessage",
        buttons: e
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"])
}

function AddComplaint(o, t) {
    var e = {};
    e[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }, e[dle_p_send] = function() {
        var e;
        $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(), $(this).dialog("close"), $("#dlepopup").remove(), $.post(dle_root + "engine/ajax/controller.php?mod=complaint", {
            id: o,
            text: e,
            action: t,
            user_hash: dle_login_hash
        }, function(e) {
            DLEalert("ok" == e ? dle_p_send_ok : e, dle_info)
        }))
    }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' title='" + dle_complaint + "' style='display:none'><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px;'></textarea></div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-complaint",
        buttons: e
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"])
}

function DLEalert(e, o) {
    $("#dlepopup").remove(), $("body").append("<div id='dlepopup' class='dle-alert' title='" + o + "' style='display:none'>" + e + "</div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 470,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-alert",
        buttons: {
            Ok: function() {
                $(this).dialog("close"), $("#dlepopup").remove()
            }
        }
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"])
}

function DLEconfirm(e, o, t) {
    var i = {};
    i[dle_act_lang[1]] = function() {
        $(this).dialog("close"), $("#dlepopup").remove()
    }, i[dle_act_lang[0]] = function() {
        $(this).dialog("close"), $("#dlepopup").remove(), t && t()
    }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' class='dle-confirm' title='" + o + "' style='display:none'>" + e + "</div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-confirm",
        buttons: i
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"])
}

function DLEprompt(e, o, t, i, n) {
    var d = {};
    d[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }, d[dle_act_lang[2]] = function() {
        var e;
        !n && $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(), $(this).dialog("close"), $("#dlepopup").remove(), i && i(e))
    }, $("#dlepopup").remove(), $("body").append("<div id='dlepopup' class='dle-promt' title='" + t + "' style='display:none'>" + e + "<br /><br /><input type='text' name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;' value='" + o + "'/></div>"), $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-promt",
        buttons: d
    }), $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#dlepopup").dialog("option", "position", ["0", "0"]), (0 < o.length ? $("#dle-promt-text").select() : $("#dle-promt-text")).focus()
}
var dle_user_profile = "",
    dle_user_profile_link = "";

function ShowPopupProfile(e, o) {
    var t = {};
    return t[menu_profile] = function() {
        document.location = dle_user_profile_link
    }, 5 != dle_group && (t[menu_send] = function() {
        DLESendPM(dle_user_profile)
    }), 1 == o && (t[menu_uedit] = function() {
        $(this).dialog("close");
        var e = {};
        $("body").append('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 999; display:none;"></div>'), $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn("slow"), $("#dleuserpopup").remove(), $("body").append("<div id='dleuserpopup' title='" + menu_uedit + "' style='display:none'></div>"), e[dle_act_lang[3]] = function() {
            $(this).dialog("close"), $("#dleuserpopup").remove()
        }, e[dle_act_lang[5]] = function() {
            window.frames.edituserframe.confirmDelete(dle_login_hash)
        }, e[dle_act_lang[4]] = function() {
            document.getElementById("edituserframe").contentWindow.document.getElementById("saveuserform").submit()
        }, $("#dleuserpopup").dialog({
            autoOpen: !0,
            show: "fade",
            width: 700,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-userprofileadmin",
            buttons: e,
            open: function(e, o) {
                $("#dleuserpopup").html("<iframe name='edituserframe' id='edituserframe' width='100%' height='400' src='" + dle_root + dle_admin + "?mod=editusers&action=edituser&user=" + dle_user_profile + "&skin=" + dle_skin + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>")
            },
            beforeClose: function(e, o) {
                $("#dleuserpopup").html("")
            },
            close: function(e, o) {
                $("#modal-overlay").fadeOut("slow", function() {
                    $("#modal-overlay").remove()
                })
            }
        }), 830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), $("#dleuserpopup").dialog("option", "position", ["0", "0"]))
    }), $("#dleprofilepopup").remove(), $("body").append(e), $("#dleprofilepopup").dialog({
        autoOpen: !0,
        show: "fade",
        hide: "fade",
        resizable: !1,
        dialogClass: "dle-popup-userprofile",
        buttons: t,
        width: 550
    }), !1
}

function ShowProfile(e, o, t) {
    return dle_user_profile == e && document.getElementById("dleprofilepopup") ? $("#dleprofilepopup").dialog("open") : (dle_user_profile = e, dle_user_profile_link = o, ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=profile", {
        name: e,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), ShowPopupProfile(e, t)
    })), !1
}

function FastSearch() {
    $("#story").attr("autocomplete", "off"), $("#story").blur(function() {
        $("#searchsuggestions").fadeOut()
    }), $("#story").keyup(function() {
        var e = $(this).val();
        0 == e.length ? $("#searchsuggestions").fadeOut() : dle_search_value != e && 3 < e.length && (clearInterval(dle_search_delay), dle_search_delay = setInterval(function() {
            dle_do_search(e)
        }, 600))
    })
}

function dle_do_search(e) {
    clearInterval(dle_search_delay), $("#searchsuggestions").remove(), $("body").append("<div id='searchsuggestions' style='display:none'></div>"), $.post(dle_root + "engine/ajax/controller.php?mod=search", {
        query: "" + e,
        user_hash: dle_login_hash
    }, function(e) {
        $("#searchsuggestions").html(e).fadeIn().css({
            position: "absolute",
            top: 0,
            left: 0
        }).position({
            my: "left top",
            at: "left bottom",
            of: "#story",
            collision: "fit flip"
        })
    }), dle_search_value = e
}

function ShowLoading(e) {
    $("#loading-layer").remove(), $("body").append("<div id='loading-layer' style='display:none'></div>"), e ? $("#loading-layer").html(e) : $("#loading-layer").html(dle_act_lang[6]), e = ($(window).width() - $("#loading-layer").width()) / 2;
    var o = ($(window).height() - $("#loading-layer").height()) / 2;
    $("#loading-layer").css({
        left: e + "px",
        top: o + "px",
        position: "fixed",
        zIndex: "99"
    }), $("#loading-layer").fadeTo("slow", .6)
}

function HideLoading(e) {
    $("#loading-layer").fadeOut("slow", function() {
        $("#loading-layer").remove()
    })
}

function ShowAllVotes() {
    return document.getElementById("dlevotespopup") ? $("#dlevotespopup").dialog("open") : ($.ajaxSetup({
        cache: !1
    }), ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=allvotes&dle_skin=" + dle_skin, function(e) {
        HideLoading(""), $("#dlevotespopup").remove(), $("body").append(e), $(".dlevotebutton").button(), $("#dlevotespopup").dialog({
            autoOpen: !0,
            show: "fade",
            hide: "fade",
            resizable: !1,
            dialogClass: "dle-popup-allvotes",
            width: 600
        }), 400 < $("#dlevotespopupcontent").height() && $("#dlevotespopupcontent").height(400), $("#dlevotespopup").dialog("option", "height", $("#dlevotespopupcontent").height() + 60), $("#dlevotespopup").dialog("option", "position", "center")
    })), !1
}

function fast_vote(o) {
    var e = $("#vote_" + o + " input:radio[name=vote_check]:checked").val();
    return void 0 === e || (ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=vote", {
        vote_id: o,
        vote_action: "vote",
        vote_mode: "fast_vote",
        vote_check: e,
        dle_skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""), $("#dle-vote_list-" + o).fadeOut(500, function() {
            $(this).html(e), $(this).fadeIn(500)
        })
    })), !1
}

function AddIgnorePM(e, o) {
    DLEconfirm(o, dle_confirm, function() {
        ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=pm", {
            id: e,
            action: "add_ignore",
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            return HideLoading(""), DLEalert(e, dle_info), !1
        })
    })
}

function DelIgnorePM(o, e) {
    DLEconfirm(e, dle_confirm, function() {
        ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=pm", {
            id: o,
            action: "del_ignore",
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            return HideLoading(""), $("#dle-ignore-list-" + o).html(""), DLEalert(e, dle_info), !1
        })
    })
}

function subscribe(e) {
    return DLEconfirm(dle_sub_agree, dle_confirm, function() {
        ShowLoading(""), $.get(dle_root + "engine/ajax/controller.php?mod=commentssubscribe", {
            news_id: e,
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""), e.success ? DLEalert(e.info, dle_info) : e.error && DLEalert(e.errorinfo, dle_info)
        }, "json")
    }), !1
}

function media_upload(t, i, n, d) {
    var l = (new Date).getTime(),
        a = "none";
    return $("#mediaupload").remove(), $("body").append("<div id='mediaupload' title='" + text_upload + "' style='display:none'></div>"), $("#mediaupload").dialog({
        autoOpen: !0,
        width: 710,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-upload",
        open: function(e, o) {
            $("#mediaupload").html("<iframe name='mediauploadframe' id='mediauploadframe' width='100%' height='550' src='" + dle_root + "engine/ajax/controller.php?mod=upload&area=" + t + "&author=" + i + "&news_id=" + n + "&wysiwyg=" + d + "&skin=" + dle_skin + "&rndval=" + l + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>"), $(".ui-dialog").draggable("option", "containment", "")
        },
        dragStart: function(e, o) {
            a = $(".modalfixed").css("box-shadow"), $(".modalfixed").fadeTo(0, .6).css("box-shadow", "none"), $("#mediaupload").css("visibility", "hidden")
        },
        dragStop: function(e, o) {
            $(".modalfixed").fadeTo(0, 1).css("box-shadow", a), $("#mediaupload").css("visibility", "visible")
        },
        beforeClose: function(e, o) {
            $("#mediaupload").html("")
        }
    }), 830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
        position: "fixed"
    }), $("#mediaupload").dialog("option", "position", ["0", "0"])), !1
}

function dropdownmenu(e, o, t, i) {
    return window.event ? event.cancelBubble = !0 : o.stopPropagation && o.stopPropagation(), (o = $("#dropmenudiv")).is(":visible") ? (clearhidemenu(), o.fadeOut("fast")) : (o.remove(), $("body").append('<div id="dropmenudiv" style="display:none;position:absolute;z-index:100;width:165px;"></div>'), (o = $("#dropmenudiv")).html(t.join("")), i && o.width(i), (t = $(document).width() - 30) - (i = $(e).offset()).left < o.width() && (i.left -= o.width() - $(e).width()), o.css({
        left: i.left + "px",
        top: i.top + $(e).height() + "px"
    }), o.fadeTo("fast", .9), o.mouseenter(function() {
        clearhidemenu()
    }).mouseleave(function() {
        delayhidemenu()
    }), $(document).one("click", function() {
        hidemenu()
    })), !1
}

function hidemenu(e) {
    $("#dropmenudiv").fadeOut("fast")
}

function delayhidemenu() {
    delayhide = setTimeout("hidemenu()", 1e3)
}

function clearhidemenu() {
    "undefined" != typeof delayhide && clearTimeout(delayhide)
}
jQuery(function(t) {
    var i = !1,
        e = [];
    t(document).keydown(function(e) {
        var o;
        if (13 == e.which && e.ctrlKey) return e.preventDefault(), window.getSelection ? o = window.getSelection() : document.getSelection ? o = document.getSelection() : document.selection && (o = document.selection.createRange().text), "" != o && (255 < o.toString().length ? (DLEalert(dle_big_text, dle_info), !1) : ((e = {})[dle_act_lang[3]] = function() {
            t(this).dialog("close")
        }, e[dle_p_send] = function() {
            var e, o;
            t("#dle-promt-text").val().length < 1 ? t("#dle-promt-text").addClass("ui-state-error") : (e = t("#dle-promt-text").val(), o = t("#orfom").text(), t(this).dialog("close"), t("#dlepopup").remove(), t.post(dle_root + "engine/ajax/controller.php?mod=complaint", {
                seltext: o,
                text: e,
                user_hash: dle_login_hash,
                action: "orfo",
                url: window.location.href
            }, function(e) {
                DLEalert("ok" == e ? dle_p_send_ok : e, dle_info)
            }))
        }, t("#dlepopup").remove(), t("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_orfo_title + "' style='display:none'><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:80px;'></textarea><div id='orfom' style='display:none'>" + o + "</div></div>"), t("#dlepopup").dialog({
            autoOpen: !0,
            width: 600,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-complaint",
            buttons: e
        }), t(".modalfixed.ui-dialog").css({
            position: "fixed"
        }), void t("#dlepopup").dialog("option", "position", ["0", "0"])))
    }), setTimeout(function() {
        t("img[data-maxwidth]").each(function() {
            var e = t(this).width(),
                o = t(this).data("maxwidth");
            t(this)[0].naturalWidth && (e = t(this)[0].naturalWidth), o < e && (t(this).width(o), t(this).wrap('<a href="' + t(this).attr("src") + '" onclick="return hs.expand(this)"></a>'), "undefined" == typeof hs && 0 == i && (i = !0, t.getScript(dle_root + "engine/classes/highslide/highslide.js", function() {
                hs.graphicsDir = dle_root + "engine/classes/highslide/graphics/", hs.numberOfImagesToPreload = 0, hs.captionEval = "this.thumb.alt", hs.showCredits = !1, hs.align = "center", hs.transitions = ["expand", "crossfade"]
            })))
        })
    }, 300), setTimeout(function() {
        t("div[data-dlebclicks]").each(function() {
            var e = t(this).data("dlebid");
            t(this).find("a").on("click", function() {
                t.post(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
                    id: e,
                    action: "bannersclick",
                    user_hash: dle_login_hash
                })
            })
        })
    }, 400), t("div[data-dlebviews]").each(function() {
        e.push(t(this).data("dlebid"))
    }), e.length && setTimeout(function() {
        t.post(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            "ids[]": e,
            action: "bannersviews",
            user_hash: dle_login_hash
        })
    }, 1e3)
});