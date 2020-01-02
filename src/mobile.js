
/**
 * IOS端H5页面调起键盘的时候，键盘把input标签遮挡了
 * 
 */
export function scrollToElement(scrollLayer, destination, duration) {
    if (duration <= 0) {
        return;
    }
    const difference = destination - scrollLayer.scrollTop;
    const perTick = (difference / duration) * 10;

    setTimeout(() => {
        scrollLayer.scrollTop = scrollLayer.scrollTop + perTick;
        if (scrollLayer.scrollTop === destination) {
            return;
        }
        this.scrollToElement(scrollLayer, destination, duration - 10);
    }, 10);
}