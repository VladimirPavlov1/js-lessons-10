export default class BtnLoadMore{
    constructor({selector, hidden=false}){
        this.refs = this.getRefs(selector);
        hidden&&this.hide();
    }
    getRefs(selector){
        const refs={};
        refs.button=document.querySelector(selector);
        refs.spText=refs.button.querySelector('.span-text');
        refs.spinner=refs.button.querySelector('.spin');

        return refs;
    }

    enable(){
        this.refs.button.disabled=false;
        this.refs.spText.textContent='Ще';
        this.refs.spinner.classList.add('is-hidden');
    }

    disabled(){
        this.refs.button.disabled=true;
        this.refs.spText.textContent='Завантажую'
        this.refs.spinner.classList.remove('is-hidden')

    }

    show(){
        this.refs.button.classList.remove('is-hidden')
    }

    hide(){
        this.refs.button.classList.add('is-hidden')
    }

}