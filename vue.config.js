module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', '@/assets')
            .set('components', '@/components')
            .set('common', '@/common')
            .set('network', '@/network')
            .set('views', '@/views'),
        // 移除 prefetch 插件(懒加载不得行的问题)    
        config.plugins.delete('prefetch')
    }
}
