/*!
 * jQuery Ajax loading animation v2.1.0
 * https://mshadroo.github.io/ajax-loading-animation/
 *
 * Based on toplan\ajax-loading-animation github repository
 * Thank to Ana Tudor for css loading spinners https://codepen.io/thebabydino/pen/yfpds
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
            
            //loading wrapper
            radius     : '4px',
            width      : '85px',
            height     : '85px',

            //loading img/gif/css
            type       : 'circle',
            imgPath    : 'http://7xjke9.com1.z0.glb.clouddn.com/ajax-loading.gif',
            imgWidth   : '80px',
            imgHeight  : '80px',

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
    }

    close() {
        var selector = '#' + this.config['id'];
        $(selector).hide();
    }

    ajax(isListen) {
        this.config['ajax'] = isListen;
    }

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

        //img style            l
        let imgCss = 'margin-bottom:8px;position:absolute;top: 50%;left: 50%;';
        cssArray = [
            'width:' + opts.imgWidth,
            'height:' + opts.imgHeight,
            'margin: -' + ((parseInt(opts.imgHeight.replace('px',''))/2) + 15)  +'px 0 0 -' + parseInt(opts.imgWidth.replace('px',''))/2 +'px'
        ];
        imgCss += cssArray.join(';');

        //text style
        let textCss = 'position:absolute;top: 50%;left: 50%;text-align:center;width:200px;';
        cssArray = [
            'font-size:' + opts.fontSize,
            'color:' + opts.fontColor,
            'margin: ' + ((parseInt(opts.imgHeight.replace('px',''))/2)  ) +'px 0 0 -100px'
        ];
        textCss += cssArray.join(';');

        let loadingWrapper = {
            'box': '<div class="box" style="' + imgCss + '"><div class="boxinner"></div></div>',
            'line': '<div class="line1" style="' + imgCss + '"></div><div class="line2"></div><div class="line3"></div><div class="line4"></div>',
            'circle': '<div class="circle" style="' + imgCss + '"></div>',
            'wave': '<div class="wavecontainer" style="' + imgCss + '"><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div></div>',
            'bar': '<div class="barcontainer" style="' + imgCss + '"><div class="circleloader"><div class="bounce"></div></div></div>',
            'switch': '<div class="switchbox" style="' + imgCss + '"><div class="switch"></div><div class="switch" id="switch2"></div></div>',
            'bouncy': '<div class="bouncybox" style="' + imgCss + '"><div class="bouncy"></div></div>',
            'image': '<div class="imageBox" style="' + imgCss + '"><img src="' + opts.imgPath + '"></div>'
        };
        
        let html = '<div id="' + opts.id + '" style="' + wrapCss + '">'
            + loadingWrapper[opts.type]
            + '<p style="' + textCss + '">' + opts.tip + '</p>'
            +'</div>';

        $(document).find('body').append(html);
    }
}