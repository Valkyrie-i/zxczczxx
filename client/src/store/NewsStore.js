import {makeAutoObservable} from "mobx";

export default class NewsStore{
    constructor() {
        this._news = [
            {id:1, title:'та за шо',description:'loremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasdloremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:2,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:3,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:4,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-39.userapi.com/impg/cFFqOEmYkWZHtf85yzPM_qwPyYbuYE0Xr3dVwg/i0_CxYPzaOQ.jpg?size=735x721&quality=95&sign=dd5e9da25fcddba4fc991022ca3c5f23&type=album'},
            {id:5,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:6,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:7,title:'хуй мамин',description:'loremasdasdasdasd',img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
        ]

        makeAutoObservable(this)
    }
    setLessons(news){
        this._news = news
    }

    get news(){
        return this._news
    }


}