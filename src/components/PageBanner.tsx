export function PageBanner({
  title,
  image = '/images/banner-inner.jpg',
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="page-banner">
      <img src={image} alt="" />
      <p className="page-banner__title">{title}</p>
    </div>
  );
}
