import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Compiler = () => {

  const {urlId} = useParams();
  useEffect(() => {
    if(urlId){
      
    }
  }, [urlId])
  

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-[calc(100vh-60px)] overflow-scroll relative min-w-[350px]" defaultSize={50}>
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compiler