import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiRecycleFill } from "react-icons/ri";

const Nav = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const logout = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("name");
        window.location.href = '/login';
    }

    if (localStorage.getItem("jwt")) {
        return (
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <Link to="/">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 font-bold ">
                        <RiRecycleFill className="text-2xl mt-1 text-green-500 hover:text-green-700" />
                        <div className="text-xl text-slate-500 hover:text-blue-500">전국 재활용센터</div>
                    </div>
                </Link>
                <div>
                    <div className="flex justify-center items-center gap-2" onClick={openModal}>
                        <GoPerson className="mt-1 text-4xl text-slate-500 hover:text-white hover:bg-blue-500 rounded-lg p-1" />
                        {/* <p className="text-xl font-bold text-blue-400 hover:text-blue-600">{localStorage.getItem("name")}</p> */}
                    </div>
                    <Modal open={isModalOpen} onClose={closeModal}>
                        <Box sx={style} className="rounded-lg w-auto">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <p>로그아웃 하시겠습니까?</p>
                                <button className="p-1 px-1 w-[5rem] bg-blue-500 hover:bg-blue-600 font-bold text-sm text-blue-300 hover:text-white" onClick={logout}>로그아웃</button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-between items-center">
                <div className="font-bold text-slate-500">
                    전국 재활용센터
                </div>
                <div className="font-bold text-sm text-blue-300">
                </div>
            </div>
        )
    }
}

export default Nav
