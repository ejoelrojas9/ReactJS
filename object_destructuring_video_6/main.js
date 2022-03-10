// Object Destructuring

const servicios = {
    api: {},
    mailer: 'soy mailer',
    apollo: 'Personaje ficticio',
}

const enviarCorreo = ({ mailer }) => {
    console.log(mailer)
        // redactar codigo que envia correo
}

enviarCorreo(servicios)

const enviarCorreo1 = (srs) => {
    const { apollo } = srs
    console.log(apollo)
        // redactar codigo que envia correo
}

enviarCorreo1(servicios)