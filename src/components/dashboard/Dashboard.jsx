import { CiBellOn, CiDark, CiLight, CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import { IoIosArrowDown, IoIosResize } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { PiPackageFill, PiUserCircle } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import line from "../../assets/Tab Container.png";
import axios from "axios";
import { TfiReload } from "react-icons/tfi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dashboard = () => {
  const [mode, setMode] = useState(true);
  const [open, setOpen] = useState(true);
  const [meal, setMeal] = useState([]);
  const [pro, setPro] = useState([]);
  const [third, setThird] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [counts, setCounts] = useState({});
  const API = "https://dummyjson.com/recipes?limit=6";
  const API_THIRD = "https://dummyjson.com/recipes?limit=3";
  const API_SECOND = "https://dummyjson.com/products?limit=3";

  async function getMeal() {
    await axios.get(API).then((res) => setMeal(res.data.recipes));
  }
  async function getPro() {
    await axios.get(API_SECOND).then((res) => setPro(res.data.products));
  }
  async function getThird() {
    await axios.get(API_THIRD).then((res) => setThird(res.data.recipes));
  }

  useEffect(() => {
    getMeal();
    getPro();
    getThird();
  }, []);

  const handleIncrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const filteredMeals = meal.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredProducts = pro.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <section
        className={`w-full h-[1285px] ${mode ? "bg-[#fff]" : "bg-[#11142D]"}`}
      >
        <header
          className={`w-full h-[80px] border-b ${
            mode ? "border-[#E1E1E1]" : "border-[#5266e8]"
          } flex items-center justify-between p-[20px_32px]`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-[8px] ${
                mode ? "bg-[#E2E2EA]" : "bg-[#5266e8]"
              }`}
            ></div>
            <h2
              className={`mulish font-bold text-[24px] ${
                mode ? "text-[#11142D]" : "text-[#E1E1E1]"
              }`}
            >
              Dazzie
            </h2>
          </div>
          <div className="flex items-center gap-[28px]">
            <button
              className={`text-[20px] ${
                mode ? "text-[#9A9AB0]" : "text-[#5266e8]"
              }`}
              onClick={() => setMode(!mode)}
            >
              {mode ? <CiDark /> : <CiLight />}
            </button>
            <CiBellOn
              className={`text-[20px] ${
                mode ? "text-[#9A9AB0]" : "text-[#5266e8]"
              }`}
            />
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-[50%] ${
                  mode ? "bg-[#E2E2EA]" : "bg-[#5266e8]"
                }`}
              ></div>
              <div>
                <h3
                  className={`mulish font-bold text-[16px] text-[#11142D] ${
                    mode ? "text-[#11142D]" : "text-[#E1E1E1]"
                  }`}
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
          className={`flex gap-[32px] ${
            mode ? "bg-[#F7F7FC]" : "bg-[#11142D]"
          }`}
        >
          <div
            className={` h-[1205px] border-r p-[40px_27px] ${
              mode
                ? "border-[#E1E1E1] bg-[#fff]"
                : "border-[#5266e8] bg-[#11142D]"
            } ${open ? "w-[112px]" : "w-[200px]"}`}
          >
            <div
              onClick={() => setOpen(!open)}
              className={`h-[56px] rounded-[8px] mb-[24px] aktiv  ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[20px] px-[20px]"
              } `}
            >
              <IoIosResize />
              <span className="text-[18px]">{open ? "" : "Close"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] aktiv aktiv ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[20px] px-[20px]"
              } `}
            >
              <SiGoogleanalytics />
              <span className="text-[18px]">{open ? "" : "Analytics"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] aktiv  ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[15px] px-[20px]"
              } `}
            >
              <MdOutlineSupervisedUserCircle className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Users"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] aktiv  ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[15px] px-[20px]"
              } `}
            >
              <PiPackageFill className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Packages"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[24px] aktiv  ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[15px] px-[20px]"
              } `}
            >
              <RiCoupon2Line className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Coupons"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[561px] aktiv  ${
                mode ? "hover:text-[#fff] text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[15px] px-[20px]"
              } `}
            >
              <PiUserCircle className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Profile"}</span>
            </div>
            <div
              className={`h-[56px] rounded-[8px] mb-[561px] aktiv  ${
                mode ? "text-[#9A9AB0]" : "text-[#E1E1E1]"
              }  ${
                open
                  ? "w-[56px] flex items-center justify-center"
                  : "w-auto flex items-center gap-[15px] px-[20px]"
              } `}
            >
              <IoSettingsOutline className="text-[22px]" />
              <span className="text-[18px]">{open ? "" : "Settings"}</span>
            </div>
          </div>
          <div
            className={`w-[832px] h-[1125px] rounded-[8px] ${
              mode ? "bg-[#FFFFFF]" : "bg-[transparent] border border-[#5266e8]"
            } mt-[40px] p-[24px_16px]`}
          >
            <div
              className={`flex items-center gap-[8px] w-full mb-[24px] ${
                mode ? "bg-[#F7F7FC]" : "bg-[#5266e8] text-[#fff]"
              } h-[40px] rounded-[8px] p-[8px_16px]`}
            >
              <CiSearch />
              <input
                className="outline-0"
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <nav className="mb-[16px]">
              <ul className="flex items-center gap-[122px] pl-[56px]">
                <li>
                  <a
                    className={`mulish font-bold text-[16px] ${
                      mode
                        ? "text-[#92929D] hover:text-[#11142D]"
                        : "text-[#fff]"
                    }`}
                    href="#"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className={`mulish font-bold text-[16px] ${
                      mode
                        ? "text-[#92929D] hover:text-[#11142D]"
                        : "text-[#fff]"
                    }`}
                    href="#"
                  >
                    Food
                  </a>
                </li>
                <li>
                  <a
                    className={`mulish font-bold text-[16px] ${
                      mode
                        ? "text-[#92929D] hover:text-[#11142D]"
                        : "text-[#fff]"
                    }`}
                    href="#"
                  >
                    Drinks
                  </a>
                </li>
                <li>
                  <a
                    className={`mulish font-bold text-[16px] ${
                      mode
                        ? "text-[#92929D] hover:text-[#11142D]"
                        : "text-[#fff]"
                    }`}
                    href="#"
                  >
                    Snack
                  </a>
                </li>
                <li>
                  <a
                    className={`mulish font-bold text-[16px] ${
                      mode
                        ? "text-[#92929D] hover:text-[#11142D]"
                        : "text-[#fff]"
                    }`}
                    href="#"
                  >
                    Packages
                  </a>
                </li>
              </ul>
            </nav>
            <img src={line} className="mb-[40px]" alt="" />
            <h2
              className={`mulish font-bold text-[24px] mb-[24px] ${
                mode ? "text-[#11142D]" : "text-[#fff]"
              }`}
            >
              Food
            </h2>
            <div
              className={`flex items-center flex-wrap  mb-[32px] ${open ? "gap-[13px]" : "gap-[10px]"}`}
            >
              {filteredMeals.map((item) => (
                <div
                  key={item.id}
                  className={`w-[256px] h-[252px] rounded-[8px] border ${
                    mode ? "border-[#DBD7F4]" : "border-[#5266e8]"
                  } p-[8px]`}
                >
                  <img
                    className="w-[240px] h-[166px] rounded-[8px] mb-[16px]"
                    src={item?.image}
                    alt="img"
                  />
                  <h2
                    className={`mulish font-bold ${
                      mode ? "text-[#11142D]" : "text-[#fff]"
                    }`}
                  >
                    {item.name}
                  </h2>
                  <p className="mulish font-bold text-[16px] text-[#42BDA1]">
                    $22
                  </p>
                </div>
              ))}
            </div>
            <h2
              className={`mulish font-bold text-[24px] mb-[24px] ${
                mode ? "text-[#11142D]" : "text-[#fff]"
              }`}
            >
              Products
            </h2>
            <div className="flex items-center gap-[10px]">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className={`w-[256px] h-[252px] rounded-[8px] border ${
                    mode ? "border-[#DBD7F4]" : "border-[#5266e8]"
                  } p-[8px]`}
                >
                  <img
                    className="w-[240px] h-[166px] rounded-[8px] bg-[#E2E2EA] mb-[16px]"
                    src={item.thumbnail}
                    alt="image"
                  />
                  <h2
                    className={`mulish font-bold ${
                      mode ? "text-[#11142D]" : "text-[#fff]"
                    }`}
                  >
                    {item.title.split(" ").slice(0, 3).join(" ") +
                      (item.title.split(" ").length > 3 ? "..." : "")}
                  </h2>
                  <p className="mulish font-bold text-[16px] text-[#42BDA1]">
                    $22
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[400px] h-[979px] mt-[40px]">
            <div
              className={`w-full h-[370px] rounded-[8px] p-[34px_16px] mb-[16px] ${mode ? "bg-[#FFFFFF]" : "bg-transparent border border-[#5266e8]"}`}
            >
              <div
                className={`flex items-center justify-between pb-[27px] mb-[12px] border-b ${mode ? "border-[#E1E1FB]" : "border-[#5266e8]"}`}
              >
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#ffffff]"}`}
                >
                  Current Order
                </h3>
                <div className="flex items-center gap-[32px]">
                  <a
                    className="mulish font-bold text-[16px] text-[#F04461]"
                    href="#"
                  >
                    Clear All
                  </a>
                  <TfiReload
                    className={`${mode ? "text-[#9A9AB0]" : "text-[#fff]"}`}
                  />
                </div>
              </div>
              {third.map((item) => (
                <div key={item.id} className="mb-[24px] flex">
                  <img
                    className="w-[64px] h-[64px] rounded-[8px] mr-[24px]"
                    src={item?.image}
                    alt="image"
                  />
                  <div className="w-[151px] mr-[32px]">
                    <h3
                      className={`mulish font-bold text-[16px] w-[151px] mb-[0px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`mulish font-bold text-[16px] text-[#42BDA1]`}
                    >
                      ${(counts[item.id] || 1) * 22}
                    </p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="w-[24px] h-[24px] rounded-[2px] bg-[#5541D7] flex items-center justify-center text-[#FFFFFF]"
                    >
                      <FaMinus />
                    </button>
                    <span
                      className={`mulish font-semibold text-[14px] ${
                        mode ? "text-[#333333]" : "text-[#fff]"
                      }`}
                    >
                      {counts[item.id] || 1}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="w-[24px] h-[24px] rounded-[2px] bg-[#5541D7] flex items-center justify-center text-[#FFFFFF]"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`w-[400px] h-[131px] rounded-[8px] p-[24px_16px] mb-[16px] ${mode ? "bg-[#FFFFFF]" : "bg-transparent border border-[#5266e8]"}`}
            >
              <h2
                className={`mulish text-[16px] font-bold mb-[24px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
              >
                Select available promo to apply
              </h2>
              <button
                className={`flex items-center justify-between w-[368px] h-[40px] p-[8px_24px] rounded-[8px] border-2 border-[#5541D7] ${mode ? "text-[#5541D7]" : "text-[#fff]"}`}
              >
                20% Off Entire Order <IoIosArrowDown />
              </button>
            </div>
            <div
              className={`w-[400px] h-[226px] rounded-[8px] p-[24px_16px_16px_16px] mb-[16px] ${mode ? "bg-[#FFFFFF]" : "bg-transparent border border-[#5266e8]"}`}
            >
              <div className="flex items-center justify-between mb-[16px]">
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#92929D]" : "text-[#fff]"}`}
                >
                  Sub Total
                </h3>
                <p
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                >
                  $88
                </p>
              </div>
              <div className="flex items-center justify-between mb-[16px]">
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#92929D]" : "text-[#fff]"}`}
                >
                  Tax Total
                </h3>
                <p
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                >
                  $4
                </p>
              </div>
              <div className="flex items-center justify-between mb-[24px]">
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#92929D]" : "text-[#fff]"}`}
                >
                  Discount
                </h3>
                <p
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                >
                  - 20%
                </p>
              </div>
              <div
                className={`w-full h-[2px] mb-[24px] ${mode ? "bg-[#E1E1FB]" : "bg-[#5266e8]"}`}
              ></div>
              <div className="flex items-center justify-between mb-[24px]">
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#92929D]" : "text-[#fff]"}`}
                >
                  Total
                </h3>
                <p
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                >
                  $32
                </p>
              </div>
            </div>
            <div
              className={`w-[400px] h-[234px] rounded-[8px] p-[34px_16px_24px_16px] ${mode ? "bg-[#FFFFFF]" : "bg-transparent border border-[#5266e8]"}`}
            >
              <div className="flex items-center justify-between mb-[35px]">
                <h3
                  className={`mulish font-bold text-[16px] ${mode ? "text-[#11142D]" : "text-[#fff]"}`}
                >
                  Payment Mode
                </h3>
                <BsThreeDotsVertical
                  className={`text-[23px] ${mode ? "text-[#9A9AB0]" : "text-[#fff]"}`}
                />
              </div>
              <div className="flex items-center gap-[8px] mb-[24px]">
                <div
                  className={`w-[87px] h-[40px] rounded-[8px] text-[#5541D7] flex items-center justify-center ${mode ? "border-2 border-[#DBD7F4] hover:border-[#5541D7]" : "border-2 border-[#5266e8] hover:border-[#fff] text-[#fff]"}`}
                >
                  Cash
                </div>
                <div
                  className={`w-[85px] h-[40px] rounded-[8px] text-[#5541D7] flex items-center justify-center ${mode ? "border-2 border-[#DBD7F4] hover:border-[#5541D7]" : "border-2 border-[#5266e8] hover:border-[#fff] text-[#fff]"}`}
                >
                  Card
                </div>
                <div
                  className={`w-[115px] h-[40px] rounded-[8px] text-[#5541D7] flex items-center justify-center ${mode ? "border-2 border-[#DBD7F4] hover:border-[#5541D7]" : "border-2 border-[#5266e8] hover:border-[#fff] text-[#fff]"}`}
                >
                  E-Wallet
                </div>
              </div>
              <button className="p-[14px_149px] bg-[#5541D7] rounded-[8px] text-[#FFFFFF] mulish font-bold text-[15px]">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
