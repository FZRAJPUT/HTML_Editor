import { Button } from "./ui/button"
import { Share2Icon, Save } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CompilerState, updateCurrentLanguage } from "../redux/slices/compilerSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Loader from "./Loader"

const HelperHeader = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode)
    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:4000/compiler/save", {
                fullCode: fullCode
            })
            console.log(response.data);
            navigate(`/compiler/${response.data.url}`, { replace: true })
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage)

    return (
        <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
            <div className="__btn_container__ flex gap-1">
                <Button variant={'success'}
                    onClick={handleSave}
                    disabled={loading}
                >
                    {
                        loading ? <Loader /> : <Save />
                    }
                </Button>
                <Button variant={"secondary"}>
                    <Share2Icon />
                </Button>
            </div>
            <div className="__tab_switcher__ flex justify-center items-center gap-1">
                <Select
                    defaultValue={currentLanguage}
                    onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerState["currentLanguage"]))}
                >
                    <p className="hidden md:block">Language : </p>
                    <SelectTrigger className="w-[180px] bg-gray-800 focus:ring-0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                    </SelectContent>
                </Select>

            </div>
        </div>
    )
}

export default HelperHeader