var _gaq = [
    ['_setAccount', 'UA-39440649-1'],
    ['_trackPageview']
];

var _bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {},
    "image": {
        "viewList": [
            "tsina", "weixin", "qzone",
            "tqq", "t163", "renren"
        ],
        "viewText": "分享到：",
        "viewSize": "16"
    }
};

var doSearch = function(e) {
    e = window.event? event: e;
    if (e.keyCode == 13) {
        var google = 'http://www.google.com/#q=site:' + location.hostname;
        var word = document.getElementById('search').value;
        var url = google + '+' + encodeURIComponent(word);
        open(url, 'iKnowledge-search');
    }
};

var doFocus = function() {
    var me = document.getElementById('search');
    if (me.value == '站内搜索') {
        me.value = '';
        me.style.color = '#000000';
    }
};

var doBlur = function() {
    var me = document.getElementById('search');
    if (me.value == '') {
        me.value = '站内搜索';
        me.style.color = '#808080';
    }
};
