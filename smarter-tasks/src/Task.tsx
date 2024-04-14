import { TaskItems } from "./Types";

interface TaskProps {
    item: TaskItems;
  }

/* // this is "class based method"
class Task extends React.Component<TaskProp> {
    render(){
        return <div className="TaskItems flex flex-col my-2 py-1 rounded-lg bg-blue-300 border-2 border-blue-500">
                    <div className="flex mx-auto text-xl font-bold text-blue-700">
                        <p className="mr-2"> {this.props.title} </p> 
                        <p> ({this.props.dueDate})</p>
                    </div>
                    <div className="mx-auto w-[40vw] text-slate-600 text-lg break-words">
                         <p>:- {this.props.description}</p>
                    </div>
                </div>
    }
} */

// this is "function based method"
const Task = (props: TaskProps) => {
    const { item } = props;
    return (
        <div className="TaskItems">
            <a href={`/tasks/${item.id}`}>
              <div className="flex justify-center text-xl font-bold text-blue-700">
                <p className="mr-2"> {item.title} </p> 
                <p> ({item.dueDate})</p>
              </div>
            </a>
            <div className="flex text-slate-600 text-lg">
              <p className=" w-[25vw] whitespace-normal break-words">:- {item.description}</p>
            </div>
        </div>
    )
}

export default Task ;





