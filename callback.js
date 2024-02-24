//Callback
// Trong JS, các biến là những đối tượng có thể được truyền như tham số cho hàm khác
//một hàm cũng có thể được trả về dưới dạng giá trị từ 1 hàm khác

// function greet(name) {
//     console.log(`Hello ${name}`);
//   }
  
//   function greetFEClass(fn) {
//     const className = "VTI FE 2043";
//     fn(className);
//   }
  
//   greetFEClass(greet);

//-bất kỳ hàm nào được truyền dưới dạng đối số cho hàm khác đều được gọi là hàm gọi lại trong JS
//-hàm chấp nhận một hàm làm đối số hoặc trả về một hàm được gọi là HOF - hàm bậc cao hơn



// function greet(name) {
//     console.log(`Hello ${name}`);
//   }
  
//   function higherOrderFunction(callback) {
//     const className = "VTI FE 2043";
//     callback(className);
//   }


//Callback
//đồng bộ và bất đồng bộ callback
// 1 Callback được thực hiện ngay lập tực được gọi là một 1 callback đồng bộ

//ví dụ về callback đồng bộ
let numbers = [1, 2, 3, 4];
numbers.map((n) => n * 2);
numbers.filter((n) => n % 2 === 0);

// 2 Callback không đồng bộ
//-Callback không đồng bộ là Callback thường được sử dụng để tiếp tục hoặc tiếp tục 
//thực thi sau khi hoàn thành một tác vụ bất đồng bộ
//-Callback được sử dụng để trì hoãn việc thực thi của một chức năng
//cho đến khi một thời gian hoặc một sự kiện cụ thể xảy ra
//-Việc tìm nạp dữ liệu mất thời gian và ta chỉ có thể chạy chức năng
//mà chúng ta muốn sau khi dữ liệu đã được tìm nạp chứ không phải ngay lập tức

//ví dụ về callback không đồng bộ
function greet(name) {
    console.log(`Hello ${name}`);
  }
  
  setTimeout(greet, 2000, "NTS");

// 3 Callback hell
//-Callback hell là một tình huống mà có quá nhiều callback lồng nhau
//-Callback hell xảy ra khi bạn viết code không đồng bộ mà không sử dụng promise hoặc async/await
//-Callback hell làm cho code của bạn trở nên khó đọc và khó hiểu
//-Callback hell có thể dẫn đến lỗi và khó bảo trì
//-Để tránh callback hell, chúng ta nên sử dụng promise hoặc async/await

//ví dụ về callback hell
// setTimeout(() => {   
//     console.log('First');
//     setTimeout(() => {
//         console.log('Second');
//         setTimeout(() => {
//             console.log('Third');
//             setTimeout(() => {
//                 console.log('Fourth');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//Callback interview questions
//1. What is a callback?
//- Callback là các hàm được truyền dưới dạng đối số cho hàm khác
//hoặc trả về từ một hàm khác
//- Chúng có thể đồng bộ nếu chúng thực thi ngay lập tức hoặc chúng có thể không đồng bộ khi chúng được thực thi sau một thời gian trôi qua,
//một số sự kiện đã xảy ra hoặc một số dữ liệu đã được tìm nạp
//- Callack là mẫu đi kèm để chạy bất đồng bộ sau khi tìm nạp một số dữ liệu hoặc sau khi một sự kiện cụ thể xảy ra
//- Nếu có quá nhiều callback lồng nhau, chúng ta gọi là callback hell