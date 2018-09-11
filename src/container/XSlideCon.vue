<template>
    <div>
        <div class='xslide-container'>
            <XSlide :initOption='initOption'></XSlide>
        </div>
    </div>
    
</template>

<script>
import XSlide from './../components/X-Slide'
export default {
    name: 'XSlideCon',    
    data () {
        return {
            initOption:{
                data:[
                    'https://upload.jianshu.io/admin_banners/web_images/4438/bf9c6d58581af41357faee1fbc1c360426335dae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                    'https://upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                    'https://upload.jianshu.io/admin_banners/web_images/4438/bf9c6d58581af41357faee1fbc1c360426335dae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                    'https://upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                    'https://upload.jianshu.io/admin_banners/web_images/4438/bf9c6d58581af41357faee1fbc1c360426335dae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                    'https://upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
                ],
                speed: 3000
            }
        }
    },
    components: {
        XSlide
    }
}
</script>

<style scoped lang='scss'>
.xslide-container{
    width:625px;
    height:270px;
}
</style>