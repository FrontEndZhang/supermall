module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', '@/assets')
            .set('components', '@/components')
            .set('common', '@/common')
            .set('network', '@/network')
            .set('views', '@/views')
        //  禁用压缩minify，解决index文件没有引号
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        })
    }
}