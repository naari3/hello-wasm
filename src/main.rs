fn main() {}

#[no_mangle]
pub extern fn fibonacci(n:i64) -> i64 {
    if n <= 1 {
        1
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}
