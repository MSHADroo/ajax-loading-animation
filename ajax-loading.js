/*!
 * jQuery Ajax loading animation v2.0.0
 * https://mshadroo.github.io/ajax-loading-animation/
 *
 * Based on toplan\ajax-loading-animation github repository
 *
 * Date: 2017-12-12
 */

class loading {
    constructor(options) {
        let default_config = {
            ajax       : true,
            //wrap div
            id         : 'ajaxLoading',
            zIndex     : '1000',
            background : 'rgba(0, 0, 0, 0.7)',
            minTime    : 200,
            radius     : '4px',
            width      : '85px',
            height     : '85px',

            //loading img/gif
            imgPath    : 'http://7xjke9.com1.z0.glb.clouddn.com/ajax-loading.gif',
            imgWidth   : '45px',
            imgHeight  : '45px',

            //loading text
            tip        : 'loading...',
            fontSize   : '14px',
            fontColor  : '#fff'
        };

        this.config = $.extend(true, {}, default_config, options);

        let config = this.config;
        this.init(config);

        var selector = '#' + config.id;

        $(document).on('ajaxStart', function () {
            if (config.ajax) {
                $(selector).show();
            }
        });

        $(document).on('ajaxComplete', function () {
            setTimeout(function () {
                $(selector).hide();
            }, config.minTime);
        });

        $(document).on('ajaxStop', function () {
            setTimeout(function () {
                $(selector).hide();
            }, config.minTime);
        });
    }

    open(time) {
        let selector = '#' + this.config['id'];
        $(selector).show();
        if (time) {
            setTimeout(function () {
                $(selector).hide();
            }, parseInt(time));
        }
    };

    close() {
        var selector = '#' + this.config['id'];
        $(selector).hide();
    };

    ajax(isListen) {
        this.config['ajax'] = isListen;
    };

    init() {
        let opts = this.config;
        //wrap div style
        let wrapCss = 'display: none;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;padding: 8px;text-align: center;vertical-align: middle;';
        let cssArray = [
            'width:' + opts.width,
            'height:' + opts.height,
            'z-index:' + opts.zIndex,
            'background:' + opts.background,
            'border-radius:' + opts.radius
        ];
        wrapCss += cssArray.join(';');

        //img style
        let imgCss = 'margin-bottom:8px;';
        cssArray = [
            'width:' + opts.imgWidth,
            'height:' + opts.imgWidth
        ];
        imgCss += cssArray.join(';');

        //text style
        let textCss = 'margin:0;';
        cssArray = [
            'font-size:' + opts.fontSize,
            'color:' + opts.fontColor
        ];
        textCss += cssArray.join(';');

        let html = '<div id="' + opts.id + '" style="' + wrapCss + '">'
            +'<img src="' + opts.imgPath + '" style="' + imgCss + '">'
            +'<p style="' + textCss + '">' + opts.tip + '</p></div>';

        $(document).find('body').append(html);
    }
}

new loading({});