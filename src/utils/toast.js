import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1600,
    background: '#FFF5F3',
    color: '#CB4042',
    iconColor: '#CB4042',
    timerProgressBar: false,
    customClass: {
        popup: 'swal-position'
    }
})