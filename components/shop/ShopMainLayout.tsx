import ShopTopic from "./ShopTopic"
import ShopBestSale from "./ShopBestSale"
import ShopOutstanding from "./ShopOutstanding"

const ShopMainLayout: React.FC = () => {
    return (
        <>
            <ShopTopic />
            <ShopBestSale data={bestsellList} />
            <ShopOutstanding />
        </>
    )
}

const bestsellList = [
    {
        id: 1,
        title: "best sell 1",
        price: 100,
        image: "https://nhathuoclongchau.com/images/product/2022/06/00031035-dung-dich-ve-sinh-phu-nu-natural-feminine-la-trau-khong-100ml-7580-62ae_large.JPG",
    },
    {
        id: 2,
        title: "best sell 2",
        price: 200,
        image: "https://nhathuoclongchau.com/images/product/2021/10/00032497-dau-goi-tri-gau-nazorel-shampoo-ketoconazol-50ml-6253-6161_large.jpg",
    },
    {
        id: 3,
        title: "best sell 3",
        price: 300,
        image: "https://nhathuoclongchau.com/images/product/2022/06/00030084-dau-goi-hoa-buoi-la-beauty-250ml-giam-gay-rung-kich-thich-moc-toc-5963-62ae_large.JPG",
    },
    {
        id: 4,
        title: "best sell 4",
        price: 400,
        image: "https://nhathuoclongchau.com/images/product/2022/06/00021309-natureplex-scargel-tri-seo-35g-4617-62af_large.jpg",
    },
    {
        id: 5,
        title: "best sell 5",
        price: 500,
        image: "https://nhathuoclongchau.com/images/product/2021/12/00032958-tam-goi-em-be-baby-gentle-wash-250ml-4730-61af_large.jpg",
    },
    {
        id: 6,
        title: "best sell 6",
        price: 600,
        image: "https://nhathuoclongchau.com/images/product/2022/06/00030085-dau-xa-hoa-buoi-la-beauty-250ml-giam-gay-rung-kich-thich-moc-toc-6449-62ae_large.JPG",
    },
]

export default ShopMainLayout
