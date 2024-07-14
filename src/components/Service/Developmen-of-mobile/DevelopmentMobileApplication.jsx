import { bgMobile, mobile } from "../../../assets/Index";
import Card from "../../../ui/Card";

const devCards = [
  {
    id: 1,
    img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTIxLjAwMDMgMTYuMzMzNEMxNC4wMDAzIDE2LjMzMzQgMTEuNjY3IDIzLjMzMzQgMTEuNjY3IDI5LjE2NjdDMTEuNjY3IDM2LjE2NjcgMTYuMzMzNyA0Ni42NjY3IDIxLjAwMDMgNDYuNjY2N0MyMy41MzkgNDYuNTU5NCAyNC45MTggNDUuNSAyOC4wMDAzIDQ1LjVDMzEuMDYxNyA0NS41IDMxLjUwMDMgNDYuNjY2NyAzNS4wMDAzIDQ2LjY2NjdDMzguNTAwMyA0Ni42NjY3IDQ0LjMzMzcgMzkuNjY2NyA0NC4zMzM3IDM1QzQ0LjI2ODMgMzQuOTc2NyAzOC41NjU3IDM0LjA1OTcgMzguNTAwMyAyOEMzOC40NTYgMjIuOTM2NyA0NC4xMzc3IDIxLjEwNzQgNDQuMzMzNyAyMUM0MS45NDY3IDE3LjUxODcgMzcuNDQ4IDE2LjQxOTcgMzYuMTY3IDE2LjMzMzRDMzIuODIzMyAxNi4wNzQ0IDI5LjU2MzcgMTguNjY2NyAyOC4wMDAzIDE4LjY2NjdDMjYuNDEzNyAxOC42NjY3IDIzLjU2NyAxNi4zMzM0IDIxLjAwMDMgMTYuMzMzNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjggOS4zMzM0MUMyOS4yMzc3IDkuMzMzNDEgMzAuNDI0NyA4Ljg0MTc1IDMxLjI5OTggNy45NjY1OEMzMi4xNzUgNy4wOTE0MSAzMi42NjY3IDUuOTA0NDMgMzIuNjY2NyA0LjY2Njc1QzMxLjQyOSA0LjY2Njc1IDMwLjI0MiA1LjE1ODQxIDI5LjM2NjggNi4wMzM1OEMyOC40OTE3IDYuOTA4NzUgMjggOC4wOTU3NCAyOCA5LjMzMzQxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
    title: "iOS",
  },
  {
    id: 2,
    img: "data:image/svg+xml;base64 , PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTkuMzMzMDEgMjMuMzMzM1YzNy4zMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ2LjY2NyAyMy4zMzMzVjM3LjMzMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYuMzMzIDIwLjk5OTlIMzkuNjY2M1YzOS42NjY2QzM5LjY2NjMgNDAuMjg1NCAzOS40MjA1IDQwLjg3ODkgMzguOTgyOSA0MS4zMTY1QzM4LjU0NTMgNDEuNzU0MSAzNy45NTE4IDQxLjk5OTkgMzcuMzMzIDQxLjk5OTlIMTguNjY2M0MxOC4wNDc1IDQxLjk5OTkgMTcuNDU0IDQxLjc1NDEgMTcuMDE2NCA0MS4zMTY1QzE2LjU3ODggNDAuODc4OSAxNi4zMzMgNDAuMjg1NCAxNi4zMzMgMzkuNjY2NlYyMC45OTk5Wk0xNi4zMzMgMjAuOTk5OUMxNi4zMzMgMTcuOTA1NyAxNy41NjIyIDE0LjkzODMgMTkuNzUwMSAxMi43NTAzQzIxLjkzOCAxMC41NjI0IDI0LjkwNTUgOS4zMzMyNSAyNy45OTk3IDkuMzMzMjVDMzEuMDkzOSA5LjMzMzI1IDM0LjA2MTMgMTAuNTYyNCAzNi4yNDkzIDEyLjc1MDNDMzguNDM3MiAxNC45MzgzIDM5LjY2NjMgMTcuOTA1NyAzOS42NjYzIDIwLjk5OTkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNjY3IDdMMjEuMDAwMyAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjMzMzMgN0wzNSAxMS42NjY3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1IDQyVjQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
    title: "Android",
  },
  {
    id: 3,
    img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=",
    title: "Crossplatform",
  },
];
const technologiy = [
  {
    id: 1,
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTQ3LjI3ODMgMTguMzE5M0M0Ny4yNzggMTcuNDkwNCA0Ny4xOTQ2IDE2LjY2MzcgNDcuMDI5MyAxNS44NTE2QzQ2Ljg2MzkgMTUuMDIwMSA0Ni41ODI4IDE0LjIxNiA0Ni4xOTQxIDEzLjQ2MjdDNDUuNzg4IDEyLjczMyA0NS4yODMyIDEyLjA2MjcgNDQuNjk0IDExLjQ3MDhDNDQuMDg2MyAxMC44NzYzIDQzLjM4MDUgMTAuMzkxMSA0Mi42MDc2IDEwLjAzNjlDNDEuODQ0OSA5LjY1MjI5IDQxLjAyOTEgOS4zODM1NSA0MC4xODcyIDkuMjM5NTJDMzkuMzUyIDkuMDc4NzkgMzguNDM0OSA5LjA3ODc5IDM3LjU5OTcgOUgxNi45OTc4QzE2LjM1NTEgOS4wMTA0NiAxNS43MTM5IDkuMDY0MTYgMTUuMDc4NSA5LjE2MDczQzE0LjQ0NzkgOS4yMzQ5NyAxMy44MzA2IDkuMzk2MTggMTMuMjQ0MiA5LjYzOTc3QzEzLjA3NzIgOS43MTg1NiAxMi44MjgyIDkuODAwNSAxMi42NjEyIDkuODc5MjlDMTIuMTA2NCAxMC4xNzY3IDExLjU3OTEgMTAuNTIyNiAxMS4wODU0IDEwLjkxM0MxMC45MTg0IDExLjA3MzcgMTAuNzUxMyAxMS4xNTI1IDEwLjU4NDMgMTEuMzEwMUM5Ljk3MDA4IDExLjg3OTggOS40NjIxMSAxMi41NTQzIDkuMDg0MTUgMTMuMzAxOUM4LjY3MTM5IDE0LjA0NDcgOC4zODg5MiAxNC44NTI3IDguMjQ4OTggMTUuNjkwOEM4LjEyNDc4IDE2LjUwODcgOC4wNDE2OCAxNy4zMzIzIDggMTguMTU4NVYzNy4xOTFDOC4wMDAyNiAzOC4wMTk4IDguMDgzNjcgMzguODQ2NSA4LjI0ODk4IDM5LjY1ODdDOC40MTQzNiA0MC40OTAxIDguNjk1NDkgNDEuMjk0MiA5LjA4NDE1IDQyLjA0NzZDOS40OTAzMiA0Mi43NzczIDkuOTk1MTIgNDMuNDQ3NSAxMC41ODQzIDQ0LjAzOTRDMTEuMTkyIDQ0LjYzNCAxMS44OTc4IDQ1LjExOTEgMTIuNjcwNyA0NS40NzM0QzEzLjQzMzQgNDUuODU4IDE0LjI0OTEgNDYuMTI2NyAxNS4wOTExIDQ2LjI3MDdDMTUuOTI2MyA0Ni40MzE0IDE2Ljg0MzQgNDYuNDMxNCAxNy42Nzg1IDQ2LjUxMDJIMzcuNjAyOUMzOC40NzA5IDQ2LjUwOTYgMzkuMzM3IDQ2LjQyOTQgNDAuMTkwNCA0Ni4yNzA3QzQxLjAzMjMgNDYuMTI2NyA0MS44NDgxIDQ1Ljg1OCA0Mi42MTA4IDQ1LjQ3MzRDNDMuMzY3MSA0NS4wOTA2IDQ0LjA2ODggNDQuNjA4NCA0NC42OTcxIDQ0LjAzOTRDNDUuMzExNCA0My40Njk3IDQ1LjgxOTMgNDIuNzk1MiA0Ni4xOTczIDQyLjA0NzZDNDYuNjEgNDEuMzA0OCA0Ni44OTI1IDQwLjQ5NjggNDcuMDMyNSAzOS42NTg3QzQ3LjE1NjcgMzguODQwOCA0Ny4yMzk4IDM4LjAxNzIgNDcuMjgxNCAzNy4xOTFWMTguMzE5M0g0Ny4yNzgzWiIgZmlsbD0iI0YwNTEzOCIvPgo8cGF0aCBkPSJNMzQuMjUyOSAzNy45OTc5QzMwLjc1MTUgMzkuOTI5OCAyNS45MzkgNDAuMTI4NCAyMS4wOTUgMzguMTQ2QzE3LjMxODIgMzYuNjEzNiAxNC4wODkgMzMuOTgxNyAxMS44MjYyIDMwLjU5MTZDMTIuODc3OCAzMS4zOTY2IDE0LjAyNjcgMzIuMDY1OCAxNS4yNDU2IDMyLjU4MzVDMjAuMjQ3MiAzNC44MjExIDI1LjI0NTYgMzQuNjY2NyAyOC43NjYgMzIuNTgzNUMyMy43NTQ5IDI4LjkwODcgMTkuNTAwMyAyNC4xMzA5IDE2LjMyOTggMjAuMjI5MkMxNS43MDQxIDE5LjU2OTggMTUuMTQ1NyAxOC44NDk4IDE0LjY2MjYgMTguMDc5OEMxOC40OTQ5IDIxLjQyMzcgMjQuNTkwMSAyNS42NDM2IDI2Ljc1ODQgMjYuODM4MUMyMy42NjI1IDIzLjY2NiAyMC44MTc1IDIwLjI1ODMgMTguMjQ5MSAxNi42NDU5QzIyLjUxODYgMjAuNzk0OSAyNy4yMTY3IDI0LjQ3ODcgMzIuMjY0MiAyNy42MzU1QzMyLjQ4OCAyNy43NTUyIDMyLjY2MTMgMjcuODU2MSAzMi44IDI3Ljk1MDZDMzIuOTQ4IDI3LjU4OTQgMzMuMDc1MyAyNy4yMjAxIDMzLjE4MTQgMjYuODQ0NEMzNC4zNTA2IDIyLjc4MiAzMy4wMTQzIDE4LjE2NDkgMzAuMDk1OSAxNC4zNDJDMzYuODUzIDE4LjI0MDYgNDAuODcxMiAyNS41NjQ5IDM5LjE4ODMgMzEuNjk3OUMzOS4xNDQyIDMxLjg2NDkgMzkuMDk2OSAzMi4wMTMgMzkuMDQ2NSAzMi4xODYzTDM5LjEwNjMgMzIuMjU1N0M0Mi40NDM5IDM2LjIzNjEgNDEuNTI2OCA0MC40NDk4IDQxLjEwNzYgMzkuNjYxOUMzOS4yOTU0IDM2LjI2NDUgMzUuOTQ1MyAzNy4zMTQgMzQuMjUyOSAzNy45OTc5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8L3N2Zz4K",
    title: "Swift",
  },
  {
    id: 2,
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTMwLjA3NDYgMTBMMTIgMjkuMDA3N1Y0NkwzMC4wNDg3IDI3LjkxOTZMNDggMTBIMzAuMDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEyIDQ1Ljk5OTdMMzAuMDQ4NyAyNy45MTk3TDQ4IDQ1Ljk5OTdIMTJaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMiAxMEgzMC4wNzQ2TDEyIDI5LjAwNzdWMTBaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1LjkzOTA0IiB5MT0iNDMuMDk4NCIgeDI9IjM5LjQzODkiIHkyPSI5LjU5ODI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMDgiIHN0b3AtY29sb3I9IiNDNzU3QkMiLz4KPHN0b3Agb2Zmc2V0PSIwLjE3MyIgc3RvcC1jb2xvcj0iI0NENUNBOSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDkyIiBzdG9wLWNvbG9yPSIjRTg3NDRGIi8+CjxzdG9wIG9mZnNldD0iMC43MTYiIHN0b3AtY29sb3I9IiNGODgzMTYiLz4KPHN0b3Agb2Zmc2V0PSIwLjgyMyIgc3RvcC1jb2xvcj0iI0ZGODkwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMy40ODkyIiB5MT0iNTIuNDk0NyIgeDI9IjM5LjgxNzYiIHkyPSIzNi4xNjYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yOTYiIHN0b3AtY29sb3I9IiMwMEFGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjY5NCIgc3RvcC1jb2xvcj0iIzUyODJGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NDVERkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iLTE1LjEzIiB5MT0iNjY1Ljc4NSIgeDI9IjczOS45MDgiIHkyPSItNTIuMjA0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMjk2IiBzdG9wLWNvbG9yPSIjMDBBRkZGIi8+CjxzdG9wIG9mZnNldD0iMC42OTQiIHN0b3AtY29sb3I9IiM1MjgyRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTQ1REZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
    title: "Kotlin",
  },
  {
    id: 3,
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjg2MDUgMTBMMTQgMjcuOTA1MkwxOS41MjgyIDMzLjQ0NzJMNDIuOTE3IDEwSDMxLjg2MDVaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0zMS43MzU5IDI2LjUxMTJMMjIuMTcyOSAzNi4wOTgyTDI3LjcyMTggNDEuNzQ0MUwzMy4yMzk4IDM2LjIxMjRMNDIuOTE2OCAyNi41MTEySDMxLjczNTlaIiBmaWxsPSIjNDdDNUZCIi8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0MzdMMzEuOTIyMyA0NS45NTQ4SDQyLjkxNjZMMzMuMjM5NSAzNi4yMTE5TDI3LjcyMTcgNDEuNzQzN1oiIGZpbGw9IiMwMDU2OUUiLz4KPHBhdGggZD0iTTIyLjExMDQgMzYuMTYwNUwyNy42Mzg3IDMwLjYxODRMMzMuMjM5NCAzNi4yMTI0TDI3LjcyMTUgNDEuNzQ0MkwyMi4xMTA0IDM2LjE2MDVaIiBmaWxsPSIjMDBCNUY4Ii8+CjxwYXRoIGQ9Ik0yNy43MjE3IDQxLjc0NEwzMi4zMTY0IDQwLjIxNTVMMzIuNzcyOCAzNi42ODAyTDI3LjcyMTcgNDEuNzQ0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjI3LjkyMTMiIHkxPSIzOC4wNDcxIiB4Mj0iMzEuNTU3NCIgeTI9IjM5LjM1NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3AvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
    title: "Flutter",
  },
];
const DevelopmentMobileApplication = () => {
  return (
    <section id="DevelopmentMobileApplication  " className=" py-4 md:py-[80px] h-screen  flex flex-col items-center justify-center">
      <div className=" custom_contianer">
        <h1 className=" text-[32px] md:text-[64px] font-extrabold  text-primary">Development of mobile applications</h1>
        <div className=" flex justify-between flex-col-reverse md:flex-row">
          <div className="mt-3 md:mt-0">
            <p className="mb-4 md:mb-[26px] max-w-[500px] leading-[30px] md:leading-10 text-[16px] md:text-[24px] font-medium">In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.</p>
            <div className="grid grid-cols-3 gap-2 md:gap-[15px] mb-2 md:mb-[25px]">
              {devCards.map((item) => {
                return <Card title={item.title} img={item.img} key={item.id} />;
              })}
            </div>
            <h3 className="text-[32px]  leading-10 mb-8  sm:mb-[30px] text-secondary font-semibold">Technologies</h3>

            <div className=" flex gap-4 md:gap-12">
              {technologiy.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.src} alt={item.title} className="mb-2 w-[42px] md:w-[56px] h-[42px] md:h-[56px]" />
                    <span className=" text-[20px] font-semibold text-secondary"> {item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="  bg-no-repeat object-cover rounded-3xl flex items-center justify-center " style={{ backgroundImage: `url(${bgMobile})` }}>
            <img src={mobile} alt="mobile image" className=" w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentMobileApplication;
