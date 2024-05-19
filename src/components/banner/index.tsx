import Image from 'next/image';
import '@/components/banner/banner.css'
interface BannerProps {
  imageUrl: string;
  altText: string;
  width:number;
  height:number

}

const Banner = ({ imageUrl, altText,width,height}:BannerProps) => {
  return (
    <div className="banner">
      <Image className='images_banner' src={imageUrl} alt={altText}  width={width} height={height}  objectFit="cover"/>
    </div>
  );
};

export default Banner;
