$('.toggle').click(function () {
    event.preventDefault();
    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show').slideUp(250);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(250);
        $this.next().toggleClass('show');
        $this.next().slideToggle(250);
        $this.find('open').removeClass('open')
    }

})