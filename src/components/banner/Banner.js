const Banner = (item) => {
  const { main_image } = item.data;

  return (
    <img src={main_image.url} alt={main_image.alt} title={main_image.alt} />
  );
};

export default Banner;
