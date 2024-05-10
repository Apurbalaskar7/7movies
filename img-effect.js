/*
Author: BeeTeam368
Author URI: http://themeforest.net/user/beeteam368
Version: 1.0.0
License: Themeforest Licence
License URI: http://themeforest.net/licenses
*/

;
(function() {
    'use strict';

    if (typeof(window.vidorev_visible_image_opacity) === 'undefined') {

        window.vidorev_visible_image_opacity = function() {
            var elements = document.querySelectorAll('img.ul-normal-effect:not(.img-effect-setup)');

            if (elements.length === 0) {
                return;
            }

            for (var i = 0; i < elements.length; i++) {

                var el = elements[i];

                var doc = document.documentElement;
                var scrollTop = ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));

                var rect = el.getBoundingClientRect();
                var elemTop = rect.top + scrollTop;

                var wHeight = (window.innerHeight || doc.clientHeight || document.body.clientHeight);
                var isVisible = (elemTop <= scrollTop + wHeight);

                if (isVisible) {
                    el.classList.add('img-effect-setup');
                    if (el.complete) {
                        el.classList.add('img-loaded');
                    } else {
                        el.addEventListener('load', function() {
                            this.classList.add('img-loaded');
                        });
                    }
                }

            }
        }

        var docElem = document.documentElement;

        window.addEventListener('scroll', window.vidorev_visible_image_opacity, true);
        window.addEventListener('resize', window.vidorev_visible_image_opacity, true);

        if (window.MutationObserver) {
            new MutationObserver(window.vidorev_visible_image_opacity).observe(docElem, {
                childList: true,
                subtree: true,
                attributes: true
            });
        } else {
            docElem['addEventListener']('DOMNodeInserted', window.vidorev_visible_image_opacity, true);
            docElem['addEventListener']('DOMAttrModified', window.vidorev_visible_image_opacity, true);
            setInterval(window.vidorev_visible_image_opacity, 999);
        }

        window.addEventListener('hashchange', window.vidorev_visible_image_opacity, true);

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name) {
            document['addEventListener'](name, window.vidorev_visible_image_opacity, true);
        });

        document['addEventListener']('DOMContentLoaded', window.vidorev_visible_image_opacity);

        window.vidorev_visible_image_opacity();

    }

}());