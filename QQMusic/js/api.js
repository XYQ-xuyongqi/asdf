const obj = {
    code: 0,
    message: 'ok',
    data: {
        title: 'Leting go',
        author: '汪苏泷',
        duration: '04:23',
        pic: 'http://p2.music.126.net/stcFdXbN2c21hzWqpDgTQA==/109951168242041913.jpg?imageView=1&type=webp&thumbnail=751x0',
        audio: 'https://m701.music.126.net/20230624112037/d1a091ce4b2bf8a3e77d933167e74268/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/27896532530/5e5d/d581/03ca/33e6ff26ff8bf8deec2fa3e8b9e16358.m4a',
        lyric: "[00:00.00] 原唱 : 蔡健雅\n[00:00.21] 词曲 : 蔡健雅\n[00:00.42] 编曲 : GavinRiFF\n[00:00.63] 制作人 : 汪苏泷/金若晨\n[00:00.84] 和声编写 : 汪苏泷/金若晨/徐杰/姜糖Shirley\n[00:01.05] 和声 : 徐杰/姜糖Shirley\n[00:01.26] 音乐总监 : 彭程@金牛studio\n[00:01.47] 音响总监 : 何飚\n[00:01.68] 乐队队长&键盘1：铃铛@牛班NEWBAND\n[00:01.89] 键盘2：叶霖@牛班NEWBAND\n[00:02.10] 吉他1：黄仲贤@牛班NEWBAND\n[00:02.31] 吉他2：倪伟恩@牛班NEWBAND\n[00:02.52] 贝斯：宣一亨@牛班NEWBAND\n[00:02.73] 鼓：Chris Trzcinski@牛班NEWBAND\n[00:02.94] 和音：张恋歌 鱼椒盐 孟呈真 叶俊\n[00:03.15] 和音编写：张恋歌\n[00:03.36] PGM：章谋杰\n[00:03.57] 音乐混音：林梦洋\n[00:03.79]Letting go\n[00:06.28]我终于舍得为你放开手\n[00:10.48]因为爱你爱到我心痛\n[00:15.80]但你却不懂\n[00:20.25]这是一封离别信\n[00:24.01]写下我该离开的原因\n[00:27.58]我在你生命中扮演的角色太模糊了\n[00:34.71]对我曾忽冷忽热\n[00:38.14]我到底是情人还是朋友\n[00:41.64]爱你是否不该太认真\n[00:45.71]That’s why\n[00:47.75]I'm letting go\n[00:50.48]我终于舍得为你放开手\n[00:54.52]因为爱你爱到我心痛\n[00:59.64]但你却不懂\n[01:02.07]Letting go\n[01:04.60]你对一切都软弱与怠惰\n[01:08.43]让人怀疑你是否爱过我 真的爱过我\n[01:18.92]Letting go\n[01:22.67]Letting go\n[01:31.43]Letting go\n[01:36.53]你是呼吸的空气\n[01:40.10]脱离不了的地心引力\n[01:43.29]你在我生命中 曾经是我存在的原因\n[01:50.49]也许就像他们说\n[01:54.13]爱情只会让人变愚蠢\n[01:57.38]自作多情 爱得太天真\n[02:01.43]That’s why\n[02:03.74]I’m letting go\n[02:06.30]我终于舍得为你放开手\n[02:10.04]因为爱你爱到我心痛\n[02:15.07]但你却不懂\n[02:18.18]Letting go\n[02:20.51]你对一切都软弱与怠惰\n[02:24.03]让人怀疑你是否爱过我 真的爱过我\n[02:33.43]为你再也找不到借口\n[02:36.95]That’s when we should let it go\n[02:43.90]That’s when we should let it go\n[02:45.55]在夜深人静里想着\n[02:49.20]心不安 却越沸腾\n[02:52.86]我无助 我无助 好想哭 好想哭\n[02:56.62]我找不到退路\n[02:59.75]在夜深人静里写着\n[03:03.50]心慢慢 就越变冷（心不安 却越沸腾）\n[03:06.72]我不恨 我不恨 也不哭 也不哭\n[03:10.45]我的眼泪 早已哭干了\n[03:17.26]Coz I’m letting go\n[03:20.41]我终于舍得为你放开手\n[03:24.06]因为爱你爱到我心痛\n[03:29.78]但你却不懂\n[03:32.13]Letting go\n[03:34.68]你对一切都软弱与怠惰\n[03:38.60]让人怀疑你是否爱过我 真的爱过我\n[03:46.31]Letting go\n[03:48.75]你对一切都软弱与怠惰\n[03:52.74]让人怀疑你是否爱过我\n[03:58.17]That’s when we should let it go\n[04:05.09]That’s when we should let it go\n[04:08.60]That’s when we should let it go\n[04:12.17]That’s when we should let it go\n"
    }
}

const API = {
    queryLyric() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(obj)
                },
                Math.round(Math.random() * (2000 - 500) + 500)
            )
        })
    }
}