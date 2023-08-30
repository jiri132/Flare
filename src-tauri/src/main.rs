// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
fn main() {
  let paths = fs::read_dir("./").unwrap();

    for path in paths {
        println!("Name: {}", path.unwrap().path().display())
    }

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![show_in_folder])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

use std::process::Command;

#[tauri::command]
fn show_in_folder(path: String) {
  #[cfg(target_os = "windows")]
  {
    Command::new("explorer")
      .args(["/select,", &path])
      .spawn()
      .unwrap();
  }
}