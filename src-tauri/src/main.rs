#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use std::path::Path;

#[tauri::command]
fn does_file_exists(file_path: &str) -> bool {
   Path::new(file_path).exists()
}

#[tauri::command]
fn get_file_content(file_path: &str) -> String {
    fs::read_to_string(file_path).unwrap()
}

#[tauri::command]
fn set_file_content(file_path: &str, data: &str) {
    fs::write(file_path, data);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![does_file_exists, get_file_content, set_file_content])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
