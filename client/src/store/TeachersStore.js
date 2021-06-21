import {makeAutoObservable} from "mobx";

export default class TeachersStore{
    constructor() {
       this._lessons = [
           {id:1, name:'русский язык'},
           {id:2,name:'география'}
       ]
        this._teachers = [
            {id:1, name:'Алексей',surname:'Алексеев', img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'},
            {id:2, name:'Виктор',surname:'Викторов', img:'https://sun9-43.userapi.com/impg/6wyjUWkY9z0TcND-HcOosb_tXpUdf7iDtCSRNw/DymH7-wreBw.jpg?size=1200x1500&quality=96&sign=c7bb51af470ce2702bf56985ebda8b7d&type=album'}
        ]
        makeAutoObservable(this)
    }
    setLessons(lessons){
        this._lessons = lessons
    }
    setTeachers(teachers){
        this._teachers = teachers
    }
    get lessons(){
        return this._lessons
    }
    get teachers(){
        return this._teachers
    }

}