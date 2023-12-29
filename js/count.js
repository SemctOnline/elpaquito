$('.counter p').each(function() {
    $(this).prop('Counter', 0).animate(Counter: $(this).data('value')
    }

    , {
        duration: 1000,
        easing: 'swing', //Esto puede ser una funcion anonima, no hace falta el (now)
        step: function(now) {
            //toFixed(0); esta funcion sirve para poner decimales en el numero que animamos,
            //si pongo 2 en vez de 0 me imprimira 2 decimales ej: 200.00
            $(this).text(this.Counter.toFixed(0));
        }
    }

);

})