// CSS/JS ONLY
(function ($, Drupal, once) {
    "use strict";

    Drupal.behaviors.ctaComponent = {
        attach: function attach(context) {
            once('ctaComponent', '.cta_component', context).forEach(function (component) {
                const content = JSON.parse($(component).attr('data-ssa-custom-component'));

                const template = `
                  <div class="cta-component-container">
                    <div class="col-1-2 col-1-2--intro">
                      <h2>${content.heading}</h2>
                    </div>
                    <div class="col-1-2 col-1-2--action">
                      <p>${content.content}</p>
                      <a href="${content.link_url}" class="btn">${content.link_text}</a>
                    </div>
                  </div>
                `;

                $(component).append(template);
                $(component).find('.cta-component-container ').css({
                  '--introBackgroundColor': content.background_left,
                  '--introColor' : content.color_left,
                  '--actionBackgroundColor' : content.background_right,
                  '--actionColor' : content.color_right
                });
            });
        }
    };
})(jQuery, Drupal, once);
