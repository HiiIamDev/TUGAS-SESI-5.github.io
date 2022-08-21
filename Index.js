
// Var Dec SIGN PAGE + ALL
let pass = document.getElementById('inputPassword')
let names = document.getElementById('inputName')
let gmail = document.getElementById('inputEmail')

let demoStatusVar = document.getElementById('demoStatus')
let namesDemo = document.getElementById('namesDemo')
var myStatus

// Var Dec LOGIN PAGE
let passLogin = document.getElementById('inputPasswordLogin')
let namesLogin = document.getElementById('inputNameLogin')

//  LOGIN PAGE

const submitLoginFunc = () => {
    if (
        namesLogin.value === localStorage.getItem('Names') &&
        passLogin.value === localStorage.getItem('Password')
    ) {
        alert (
            'Login Sukses'
        )
        window.location.href = '../Landing/index.html'
        localStorage.setItem('Status', 'Pengguna')
    } else if (
        namesLogin.value === 'admin' &&
        passLogin.value === 'admin'
    ) {
        alert (
            'Login Sukses'
        )
        localStorage.setItem('Status', 'Admin')
        window.location.href = '../Landing/index.html'
    } else {
        document.getElementById('demoLogin').innerHTML = 'Nama Atau Password Anda Salah, Jika Anda Belum Memiliki Akun Silahkan Daftar'
    }
}

const showHideFuncLogin = () => {
    if ( passLogin.type === 'password' ) {
        passLogin.type = 'text'
    } else {
        passLogin.type = 'password'
    }
}

// INDEX.HTML SIGN IN 

const showHideFunc = () => {
    if ( pass.type === 'password') {
        pass.type = 'text'
    } else {
        pass.type = 'password'
    }
}

const submitFunc = () => {
    localStorage.setItem (
        'Names',
        names.value
    )
    localStorage.setItem (
        'Password',
        pass.value
    )
    localStorage.setItem(
        'Gmail',
        gmail.value
    )
    if (
        localStorage.getItem('Names') === '' |
        localStorage.getItem('Gmail') === '' |
        localStorage.getItem('Password') === ''
    ) {
        document.getElementById('demo').innerHTML = 'Silahkan Isi Forum Berikut!'
    } else {
        window.location.href = '../Login/index.html'
    }
}

namesDemo.innerHTML = localStorage.getItem('Names')
demoStatusVar.innerHTML = 'Halo ' + localStorage.getItem('Names') + '!'

const landingQuit = () => {
    let quit = confirm(
        `Apakah Anda Yakin Ingin Keluar Sebagai ${localStorage.getItem('Names')}?` 
    ) 
    quit === true ? window.location.href = "../index.html" : alert (
        'Oke'  
    )
}


// if ( myStatus = true ) {
//     innerStatus = 'Hallo Admin!'
// } else {
//     innerStatus = `Halo ${localStorage.getItem('Names')}, Kamu Adalah User`
// }

// LANDING PAGE HTML 