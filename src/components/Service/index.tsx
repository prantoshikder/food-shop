import { FaChalkboard } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GoCopy, GoPackage } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import Container from "../shared/Container";
import ServiceCard from "./ServiceCard";
import "./service.styles.scss";

const Service = () => {
  const serviceItems = [
    {
      id: 1,
      title: "31 APP SCREEN",
      description:
        "1x Resolution 375x812px Screen can be resize and customized anywhere",
      icon: <FaChalkboard />,
    },
    {
      id: 2,
      title: "100% VECTOR",
      description: "Maeman screen is constructed of 100% vector shapes",
      icon: <FiEdit />,
    },
    {
      id: 3,
      title: "FULLY LAYERED",
      description:
        "Completely editable layer, well organized with proper names",
      icon: <GoCopy />,
    },
    {
      id: 4,
      title: "ICON PACK",
      description:
        "Feather icons is perfect to create unique design experience",
      icon: <GoPackage />,
    },
    {
      id: 5,
      title: "DESIGN & STYLE",
      description:
        "Library and Shared Text Style makes for and editable everyone",
      icon: <TfiReload />,
    },
  ];

  return (
    <section className="service-section m-auto flex content-center items-center">
      <Container>
        <div className="header text-center">
          <h1 className="title">MAEMAN</h1>
          <h4 className="sub-title">WHAT'S INCLUDED</h4>
        </div>
        <div className="service-items m-auto flex content-center items-center">
          {serviceItems?.length > 0 &&
            serviceItems.map((serviceData) => (
              <ServiceCard key={serviceData?.id} serviceData={serviceData} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Service;
