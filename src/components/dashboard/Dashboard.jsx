import { CiBellOn, CiDark, CiLight, CiSearch } from "react-icons/ci";
import { useState } from "react";
import "./Dashboard.css";
import { IoIosResize } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { PiPackageFill, PiUserCircle, PiUserCircleLight } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const [mode, setMode] = useState(true);
  const [open, setOpen] = useState(true);
  return (
    <div className="container">
      <section
        className={`w-full h-[1285px] ${mode ? "bg-[#fff]" : "bg-[#11142D]"}`}
      >
        <header
          className={`w-full h-[80px] border-b ${mode ? "border-[#E1E1E1]" : "border-[#5266e8]"} flex items-center justify-between p-[20px_32px]`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-[8px] ${mode ? "bg-[#E2E2EA]" : "bg-[#5266e8]"}`}
            ></div>
            <h2
              className={`mulish font-bold text-[24px] ${mode ? "text-[#11142D]" : "text-[#E1E1E1]"}`}
            >
              Dazzie
            </h2>
          </div>
          <div className="flex items-center gap-[28px]">
            <button
              className={`text-[20px] ${mode ? "text-[#9A9AB0]" : "text-[#5266e8]"}`}
              onClick={() => setMode(!mode)}
            >
              {mode ? <CiDark /> : <CiLight />}
            </button>
            <CiBellOn
              className={`text-[20px] ${mode ? "text-[#9A9AB0]" : "text-[#5266e8]"}`}
            />
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-[50%] ${mode ? "bg-[#E2E2EA]" : "bg-[#5266e8]"}`}
              ></div>
              <div>
                <h3
                  className={`mulish font-bold text-[16px] text-[#11142D] ${mode ? "text-[#11142D]" : "text-[#E1E1E1]"}`}
                >
                  Sumanto
                </h3>
                <p className="mulish font-normal text-[12px] text-[#9A9AB0]">
                  Cashier
                </p>
              </div>
            </div>
          </div>
        </header>
        <div
          className={`flex gap-[32px] ${mode ? "bg-[#F7F7FC]" : "bg-[#11142D]"}`}
        >
          <div
            className={` h-[1205px] border-r p-[40px_27px] ${mode ? "border-[#E1E1E1] bg-[#fff]" : "border-[#5266e8] bg-[#11142D]"} ${open ? "w-[112px]" : "w-[250px]"}`}
          >
            <div
              onClick={() => setOpen(!open)}
              className={`h-[56px] rounded-[8px] mb-[24px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[20px] px-[20px]"} `}
            >
              <IoIosResize />
              <span className="text-[18px]">{open ? "" : "Close"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[20px] px-[20px]"} `}
            >
              <SiGoogleanalytics />
              <span className="text-[18px]">{open ? "" : "Analytics"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[15px] px-[20px]"} `}
            >
              <MdOutlineSupervisedUserCircle className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Users"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[15px] px-[20px]"} `}
            >
              <PiPackageFill className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Packages"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[15px] px-[20px]"} `}
            >
              <RiCoupon2Line className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Coupons"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[561px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[15px] px-[20px]"} `}
            >
              <PiUserCircle className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Profile"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[561px] hover:bg-[#5541D7]  ${mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"}  ${open ? "w-[56px] flex items-center justify-center" : "w-auto flex items-center gap-[15px] px-[20px]"} `}
            >
              <IoSettingsOutline className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Settings"}</span>
            </div>
          </div>
          <div className={`w-[832px] h-[1125px] rounded-[8px] bg-[#FFFFFF] mt-[40px] p-[24px_16px]`}>
            <div className="flex items-center gap-[8px] w-full bg-[#F7F7FC] h-[40px] rounded-[8px] p-[8px_16px]">
              <CiSearch />
              <input
                className="outline-0"
                type="text"
                placeholder="Search Here..."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
