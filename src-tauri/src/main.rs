#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use std::path::Path;

/**
 * Expose a command to know if a file exists on filesystem
 */
#[tauri::command]
fn does_file_exists(file_path: &str) -> bool {
   Path::new(file_path).exists()
}

/**
 * Expose a command to read on filesystem
 */
#[tauri::command]
fn get_file_content(file_path: &str) -> String {
    fs::read_to_string(file_path).unwrap()
}

/**
 * Expose a command to create a folder on filesystem
 */
#[tauri::command]
fn mkdir(folder_path: &str) {
    let _ = fs::create_dir(folder_path);
}

/**
 * Expose a command to write on filesystem
 */
#[tauri::command]
fn set_file_content(file_path: &str, data: &str) {
    let _ = fs::write(file_path, data);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![does_file_exists, get_file_content, mkdir, set_file_content])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
