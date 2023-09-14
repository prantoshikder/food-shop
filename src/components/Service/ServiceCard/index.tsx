const ServiceCard = ({ serviceData }: any) => {
  return (
    <div className="service-item text-center">
      <span className="icon">{serviceData?.icon}</span>
      <h3 className="service-title">{serviceData?.title}</h3>
      <p className="service-des">{serviceData?.description}</p>
    </div>
  );
};

export default ServiceCard;
