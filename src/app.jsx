// component Base
import { useState } from "react"
import Square from "./compoments/square"
import Board from "./compoments/broad"

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// State: Là trạng thái (bộ nhớ) của component, nó quyết định componetn được hiện thị như thế nào
const App = () => {

    return <div
        className="h-[100vh] flex flex-col justify-center items-center">
        <Board>
            
        </Board>
    </div>
}

export default App