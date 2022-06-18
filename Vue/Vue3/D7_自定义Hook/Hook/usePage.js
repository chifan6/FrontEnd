import {ref, onMounted, onUnmounted} from "vue";

export default function() {
    let pageX = ref(0);
    let pageY = ref(0);
    let ChangPageCoordinate = (event) => {
        pageX.value = event.pageX
        pageY.value = event.pageY
    }
    onMounted(() => {
        window.addEventListener("click", ChangPageCoordinate);
    })
    onUnmounted(() => {
        window.removeEventListener("click", ChangPageCoordinate)
    })
    return {pageX, pageY}
}