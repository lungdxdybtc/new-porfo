import React, { useRef } from "react";

// Component GlowCard là một card có hiệu ứng phát sáng khi di chuyển chuột vào.
// Nó nhận vào các props: card, children, index.
const GlowCard = ({card, children, index}) =>{
    // Tạo một ref để lưu trữ các thẻ card.
    const cardRefs = useRef([]);
    // Hàm xử lý sự kiện di chuyển chuột.
    const handleMouseMove = (index) => (e) => {
        // Lấy thẻ card tương ứng với index.
        const card = cardRefs.current[index];
        // Nếu không tìm thấy card thì thoát hàm.
        if(!card) return;
        // Lấy vị trí chuột so với card.
        const rect = card.getBoundingClientRect();
        // Tính toán vị trí chuột theo trục x so với tâm card.
        const mouseX = e.clientX - rect.left - rect.width / 2;
        // Tính toán vị trí chuột theo trục y so với tâm card.
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Tính toán góc từ tâm card đến vị trí chuột.
        let angle = Math.atan2(mouseY, mouseX) * (180/Math.PI);
        // Đảm bảo góc luôn nằm trong khoảng 0-360 độ.
        angle = (angle + 360 ) % 360;
        // Thiết lập thuộc tính CSS --start để tạo hiệu ứng phát sáng.
        // Góc cộng thêm 60 độ để tạo hiệu ứng đẹp hơn
        card.style.setProperty('--start', angle + 60);
    }

    return(
        // Tạo một div bao bọc card, ref được sử dụng để lấy element thẻ card này sau
        // onMouseMove gọi khi chuột di chuyển trên div này
        // các class className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column" dùng để css cho thẻ này
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
            {/* Div này tạo ra lớp phát sáng */}
            <div className="glow"></div>
            {/* Div này là khung chứa ảnh các ngôi sao */}
                <div className="flex items-center gap-1 mb-5">
                {/* Tạo 5 hình ngôi sao */}
                    {Array.from({length:5}, (_,i) =>(
                        // thẻ img render ra các ngôi sao
                        // src="public/images/star.png" : lấy ảnh ngôi sao
                        // key={i} : set key cho mỗi img
                        // alt="start" : set mô tả cho ảnh
                        // className="size-5" : set style
                        <img src = "/images/star.png" key={i} alt="start" className="size-5"/>
                    ))}
                </div>
                {/* Div này là khung chứa review của card */}
                <div className="mb-5">
                    <p className="text-gray-300 text-lg">{card.review}</p>
                </div>
                {children}
            
        </div>
    )
}
// Xuất component GlowCard để sử dụng ở các file khác
export default GlowCard