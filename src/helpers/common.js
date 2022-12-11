import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2'


const loading = (e) => {
    document.dispatchEvent(new CustomEvent("loading", { detail: e }));
}
const _alert = (msg, isError = false) => {
    Swal.fire({
        title: isError ? 'Error' : 'Success',
        text: msg,
        icon: isError ? 'error' : 'success',
        confirmButtonText: 'OK'
    })
}
export { loading, _alert, }