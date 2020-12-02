
const PaymentInfo = () => {
    return (
        <section className="section payment">
        <div className="container">
          <div className="course">
            <h2 className="type">Thanh Toán</h2>
          </div>
        </div>
        <div className="payment__item">
            <div className="payment__item--wrap">
                <h2 className="title">
                    Hình thức thanh toán
                </h2>
                <div className="details">
                    <h3 className="sub__title">
                        Hình thức chuyển khoản
                    </h3>
                    <div className="card">
                        - Thẻ ATM nội địa;<br/>
                        - Thẻ Visa, Master, JCB...;<br/>
                        - Ví MOMO.
                    </div>
                    <div className="tt">
                        CFD chỉ gửi xác nhận sau khi học phí được chuyển đến tài khoản của CFD và sẽ không chịu trách nhiệm hay hoàn trả học phí khi có sai sót trong quá trình chuyển khoản hoặc sai thông tin chuyển khoản. Nếu xảy ra sai sót, Bạn vui lòng làm việc với ngân hàng để được xử lí.
                    </div>
                    <h3 className="sub__title">
                        THÔNG TIN TÀI KHOẢN:
                    </h3>
                    <ul>
                        <li> <strong>Chủ tài khoản:</strong>TRAN LE TRONG NGHIA</li>
                        <li><strong> Số tài khoản:</strong>004704070012672</li>
                        <li><strong> Ngân hàng:</strong>HD Bank - chi nhánh Nguyễn Trãi (hoặc chọn Tp Hồ Chí Minh)</li>
                        <li> <strong>Nội dung chuyển khoản: </strong> Họ và tên số điện thoại mã khóa học (ví dụ: Nguyen Tuan Anh 0989998881 CFD2)</li>
                    </ul>
                    <p>Sau khi thanh toán và CFD nhận được tiền sẽ chủ động nhắn tin để xác nhận.</p>
                    <h3 className="sub__title">
                        Hình thức trực tiếp
                    </h3>
                    <div className="tt">Hình thức thanh toán này chỉ áp dụng cho các thành viên tham gia khóa CFD OFFLINE. Thanh toán ngày đầu tiên khi tham gia khóa học.</div>
                </div>
            </div>
        </div>
        <div className="payment__item">
            <div className="payment__item--wrap">
                <h2 className="title">
                    Hoàn trả học phí
                </h2>
                <div className="details">
                   <div className="tt">
                    CFD không chịu trách nhiệm hoàn trả học phí trong bất kỳ trường hợp nào trừ khi 
                    dịch vụ của CFD bị gián đoạn, trục trặc do lỗi từ phía CFD gây ảnh hưởng nghiêm trọng đến quyền lợi của học viên.
                   </div>
                </div>
            </div>
        </div>
        <div className="payment__item">
            <div className="payment__item--wrap">
                <h2 className="title">
                    Chính sách ưu đãi
                </h2>
                <div className="details">
                    <div className="tt">
                        Sẽ được CFD thông báo công khai tại website theo từng chương trình ưu đãi cụ thể.
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PaymentInfo;