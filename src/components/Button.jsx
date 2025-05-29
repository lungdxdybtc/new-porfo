// Button.jsx (Giữ nguyên logic JS, chỉ thay đổi className)
const Button = ({text, className, id}) => {
    return (
        <a
        onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('counter'); // Target vẫn là 'counter'
            if (target && id){ // Logic điều kiện vẫn giữ nguyên
                const offset = window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({top, behavior:'smooth'})
            }
        }}
        // --- THAY ĐỔI CHÍNH Ở ĐÂY ---
        // Áp dụng các class Tailwind mới cho thẻ <a> bên ngoài
        // và các class cho cấu trúc bên trong
        className={`
            inline-flex items-center justify-center group relative overflow-hidden
            text-white active:scale-[0.98] focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-orange-400
            rounded-full /* Làm tròn giống button mới */
            custom-old-button-gradient /* Class tùy chỉnh cho hiệu ứng gradient */
            ${className ?? ''} /* Các class tùy chỉnh từ prop vẫn được áp dụng */

            /* Responsive Sizing (ví dụ, giống button mới) */
            text-xs px-5 py-2.5
            sm:text-sm sm:px-6 sm:py-3
            md:text-base md:px-7 md:py-3.5
            lg:px-8 lg:py-4
        `}
        // href="#" // Nên thêm href="#" hoặc href="javascript:void(0);" cho thẻ <a> nếu nó chỉ dùng cho JS
        // Nếu không, trình duyệt có thể không coi nó là một phần tử có thể focus hoặc tương tác đầy đủ
        href={id ? "#" : undefined} // Chỉ thêm href nếu có id (theo logic cũ của bạn)
        role={id ? "button" : undefined} // Cải thiện accessibility nếu dùng như button
        >
            {/* Span cho hiệu ứng gradient nền xoay (giống Button mới) */}
            <span className="custom-old-button-gradient-bg"></span>
            {/* Span cho lớp nền màu tối bên trên gradient, tạo hiệu ứng viền */}
            <span className="absolute inset-0.5 rounded-full bg-slate-900 group-hover:bg-slate-800 transition-colors duration-300 z-[-1]"></span>

            {/* Cấu trúc bên trong cũ, nhưng giờ được bọc trong một span với z-index để đảm bảo nó ở trên các lớp gradient */}
            <span className="relative z-[1] flex items-center"> {/* Đảm bảo nội dung này ở trên */}
                {/* <div className="cta-button group"> -> Div này có thể không cần nữa nếu <a> đã là group */}
                    {/* <div className = "bg-circle"></div> -> Hiệu ứng này sẽ cần CSS riêng nếu muốn giữ */}
                    <p className ="text-content">{text}</p> {/* Đổi class để tránh xung đột, hoặc giữ "text" nếu CSS cho nó vẫn phù hợp */}
                    <div className = "arrow-wrapper ml-1.5 sm:ml-2"> {/* Thêm margin cho arrow */}
                        {/* Sử dụng Heroicon thay vì img cho hiện đại và dễ style */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transform group-hover:translate-y-0.5 transition-transform duration-200">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        {/* <img src="public/images/arrow-down.svg" alt = "arrow" /> */}
                    </div>
                {/* </div> */}
            </span>
        </a>
    )
}

export default Button;