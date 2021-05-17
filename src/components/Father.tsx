import React,{useState,useCallback} from 'react'

let  A = ({data,onSomething})=> {

    console.log("Render A")
    return (
        <div>
            A child {data.name}
        </div>
    )
}
A = React.memo(A)

class BComp extends React.PureComponent<any> {
    render(){
        console.log("Render B")
        const {data,onSomething} = this.props;
        return (<div>
        B child {data.name}
    </div>)
    }
}
function B({data,onSomething}) {
    console.log("Render B")
    return (
        
        <div>
            B child {data.name}
        </div>
    )
}
let  C = ({data,onSomething})=>{
    console.log("Render C")
    return (
        <div>
            C child {data.name}
        </div>
    )
}
C = React.memo(C)

let  D = ({onSomething})=>{
    console.log("Render D")
    return (
        <div>
            D child 
        </div>
    )
}
D = React.memo(D)
export  const Father =  () => {
    const[data,setData]=useState({
    'a':{
        'name':'Seda'
    },
    'b':{
        'name':"Arpi"
    },
    'c':{
        'name':'Sona'
    }
    });
    console.log("Render Father");
    const onSomething = useCallback(()=>({}),[]);
    return (
        <div >
            <A onSomething={onSomething} data={data.a} />
            <BComp onSomething={onSomething} data={data.b}/>
            <C onSomething={onSomething} data={data.c}/>
            <D  onSomething={onSomething} />
            {JSON.stringify(data)}
            <button  onClick={(e)=>{setData((s)=>({...s,...{a:{name:`Seda ${Math.random()}`}}}))}}>Click me</button>
        </div>
    )
}