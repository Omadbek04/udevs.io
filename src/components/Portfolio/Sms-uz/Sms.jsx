import { desktop, bgMobile } from "../../../assets/Index";
import Card from "../../../ui/Card";

const uxCards = [
  {
    id: 1,
    img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzM5LjU5OCA0OSA0OSAzOS41OTggNDkgMjhDNDkgMTYuNDAyIDM5LjU5OCA3IDI4IDdDMTYuNDAyIDcgNyAxNi40MDIgNyAyOEM3IDM5LjU5OCAxNi40MDIgNDkgMjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDAwMzkgMjFINDcuNjAwNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQwMDM5IDM1SDQ3LjYwMDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuODMzMiA3QzIyLjkwMjMgMTMuMjk5MSAyMC44MTg0IDIwLjU3NSAyMC44MTg0IDI4QzIwLjgxODQgMzUuNDI1IDIyLjkwMjMgNDIuNzAwOSAyNi44MzMyIDQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjE2NyA3QzMzLjA5NzkgMTMuMjk5MSAzNS4xODE4IDIwLjU3NSAzNS4xODE4IDI4QzM1LjE4MTggMzUuNDI1IDMzLjA5NzkgNDIuNzAwOSAyOS4xNjcgNDkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
    title: "Website",
  },
  {
    id: 2,
    img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjY2NjcgMTguNjY2OEMzNS4yNDQgMTguNjY2OCAzNy4zMzMzIDE2LjU3NzUgMzcuMzMzMyAxNC4wMDAyQzM3LjMzMzMgMTEuNDIyOCAzNS4yNDQgOS4zMzM1IDMyLjY2NjcgOS4zMzM1QzMwLjA4OTMgOS4zMzM1IDI4IDExLjQyMjggMjggMTQuMDAwMkMyOCAxNi41Nzc1IDMwLjA4OTMgMTguNjY2OCAzMi42NjY3IDE4LjY2NjhaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzMzMDEgMTRIMjcuOTk5NyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNy4zMzMgMTRINDYuNjY2MyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC42NjY3IDMyLjY2NjhDMjEuMjQ0IDMyLjY2NjggMjMuMzMzMyAzMC41Nzc1IDIzLjMzMzMgMjguMDAwMkMyMy4zMzMzIDI1LjQyMjggMjEuMjQ0IDIzLjMzMzUgMTguNjY2NyAyMy4zMzM1QzE2LjA4OTMgMjMuMzMzNSAxNCAyNS40MjI4IDE0IDI4LjAwMDJDMTQgMzAuNTc3NSAxNi4wODkzIDMyLjY2NjggMTguNjY2NyAzMi42NjY4WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjMzMzAxIDI4SDEzLjk5OTciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMuMzMzIDI4SDQ2LjY2NjMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNjY2NyA0Ni42NjY4QzQyLjI0NCA0Ni42NjY4IDQ0LjMzMzMgNDQuNTc3NSA0NC4zMzMzIDQyLjAwMDJDNDQuMzMzMyAzOS40MjI4IDQyLjI0NCAzNy4zMzM1IDM5LjY2NjcgMzcuMzMzNUMzNy4wODkzIDM3LjMzMzUgMzUgMzkuNDIyOCAzNSA0Mi4wMDAyQzM1IDQ0LjU3NzUgMzcuMDg5MyA0Ni42NjY4IDM5LjY2NjcgNDYuNjY2OFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSA0MkgzNC45OTk3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjMzMyA0Mkg0Ni42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
    title: "Admin panel",
  },
  {
    id: 3,
    img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo=",
    title: "Crossplatform",
  },
];

const Sms = () => {
  return (
    <section id="sms" className=" py-20">
      <div className="custom_contianer">
        <div className=" flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center">
        <div>
          <div className=" ">
            <img
              className=" mb-[30px]"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEzIiBoZWlnaHQ9IjQ3IiB2aWV3Qm94PSIwIDAgMzEzIDQ3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNjA4IDQ2LjQ0OEMxMy4zNiA0Ni40NDggOS4wNTA2NyA0NS4yMTA3IDUuNjggNDIuNzM2QzIuMzA5MzMgNDAuMjE4NyAwLjQ5NiAzNi42MzQ3IDAuMjQgMzEuOTg0SDEzLjYxNkMxMy43NDQgMzMuNTYyNyAxNC4yMTMzIDM0LjcxNDcgMTUuMDI0IDM1LjQ0QzE1LjgzNDcgMzYuMTY1MyAxNi44OCAzNi41MjggMTguMTYgMzYuNTI4QzE5LjMxMiAzNi41MjggMjAuMjUwNyAzNi4yNTA3IDIwLjk3NiAzNS42OTZDMjEuNzQ0IDM1LjA5ODcgMjIuMTI4IDM0LjI4OCAyMi4xMjggMzMuMjY0QzIyLjEyOCAzMS45NDEzIDIxLjUwOTMgMzAuOTE3MyAyMC4yNzIgMzAuMTkyQzE5LjAzNDcgMjkuNDY2NyAxNy4wMjkzIDI4LjY1NiAxNC4yNTYgMjcuNzZDMTEuMzEyIDI2Ljc3ODcgOC45MjI2NyAyNS44NCA3LjA4OCAyNC45NDRDNS4yOTYgMjQuMDA1MyAzLjcxNzMzIDIyLjY2MTMgMi4zNTIgMjAuOTEyQzEuMDI5MzMgMTkuMTIgMC4zNjggMTYuNzk0NyAwLjM2OCAxMy45MzZDMC4zNjggMTEuMDM0NyAxLjA5MzMzIDguNTYgMi41NDQgNi41MTJDMy45OTQ2NyA0LjQyMTMzIDYgMi44NDI2NyA4LjU2IDEuNzc2QzExLjEyIDAuNzA5MzMyIDE0LjAyMTMgMC4xNzU5OTkgMTcuMjY0IDAuMTc1OTk5QzIyLjUxMiAwLjE3NTk5OSAyNi42OTMzIDEuNDEzMzMgMjkuODA4IDMuODg4QzMyLjk2NTMgNi4zMiAzNC42NTA3IDkuNzU0NjcgMzQuODY0IDE0LjE5MkgyMS4yMzJDMjEuMTg5MyAxMi44MjY3IDIwLjc2MjcgMTEuODAyNyAxOS45NTIgMTEuMTJDMTkuMTg0IDEwLjQzNzMgMTguMTgxMyAxMC4wOTYgMTYuOTQ0IDEwLjA5NkMxNi4wMDUzIDEwLjA5NiAxNS4yMzczIDEwLjM3MzMgMTQuNjQgMTAuOTI4QzE0LjA0MjcgMTEuNDgyNyAxMy43NDQgMTIuMjcyIDEzLjc0NCAxMy4yOTZDMTMuNzQ0IDE0LjE0OTMgMTQuMDY0IDE0Ljg5NiAxNC43MDQgMTUuNTM2QzE1LjM4NjcgMTYuMTMzMyAxNi4yMTg3IDE2LjY2NjcgMTcuMiAxNy4xMzZDMTguMTgxMyAxNy41NjI3IDE5LjYzMiAxOC4xMTczIDIxLjU1MiAxOC44QzI0LjQxMDcgMTkuNzgxMyAyNi43NTczIDIwLjc2MjcgMjguNTkyIDIxLjc0NEMzMC40NjkzIDIyLjY4MjcgMzIuMDY5MyAyNC4wMjY3IDMzLjM5MiAyNS43NzZDMzQuNzU3MyAyNy40ODI3IDM1LjQ0IDI5LjY1ODcgMzUuNDQgMzIuMzA0QzM1LjQ0IDM0Ljk5MiAzNC43NTczIDM3LjQwMjcgMzMuMzkyIDM5LjUzNkMzMi4wNjkzIDQxLjY2OTMgMzAuMTI4IDQzLjM1NDcgMjcuNTY4IDQ0LjU5MkMyNS4wNTA3IDQ1LjgyOTMgMjIuMDY0IDQ2LjQ0OCAxOC42MDggNDYuNDQ4Wk04OC4xODM1IDkuNzc2QzkyLjcwNjIgOS43NzYgOTYuMjQ3NSAxMS4xNDEzIDk4LjgwNzUgMTMuODcyQzEwMS40MSAxNi42MDI3IDEwMi43MTIgMjAuMzM2IDEwMi43MTIgMjUuMDcyVjQ2SDkwLjE2NzVWMjYuNzM2QzkwLjE2NzUgMjQuODE2IDg5LjYzNDIgMjMuMzIyNyA4OC41Njc1IDIyLjI1NkM4Ny41MDA4IDIxLjE4OTMgODYuMDUwMiAyMC42NTYgODQuMjE1NSAyMC42NTZDODIuMzgwOCAyMC42NTYgODAuOTMwMiAyMS4xODkzIDc5Ljg2MzUgMjIuMjU2Qzc4Ljc5NjggMjMuMzIyNyA3OC4yNjM1IDI0LjgxNiA3OC4yNjM1IDI2LjczNlY0Nkg2NS43MTk1VjI2LjczNkM2NS43MTk1IDI0LjgxNiA2NS4xODYyIDIzLjMyMjcgNjQuMTE5NSAyMi4yNTZDNjMuMDk1NSAyMS4xODkzIDYxLjY2NjIgMjAuNjU2IDU5LjgzMTUgMjAuNjU2QzU3Ljk1NDIgMjAuNjU2IDU2LjQ4MjIgMjEuMTg5MyA1NS40MTU1IDIyLjI1NkM1NC4zNDg4IDIzLjMyMjcgNTMuODE1NSAyNC44MTYgNTMuODE1NSAyNi43MzZWNDZINDEuMjcxNVYxMC4wOTZINTMuODE1NVYxNC44MzJDNTQuOTI0OCAxMy4yOTYgNTYuMzU0MiAxMi4wOCA1OC4xMDM1IDExLjE4NEM1OS44OTU1IDEwLjI0NTMgNjEuOTQzNSA5Ljc3NiA2NC4yNDc1IDkuNzc2QzY2Ljg5MjggOS43NzYgNjkuMjM5NSAxMC4zNTIgNzEuMjg3NSAxMS41MDRDNzMuMzc4MiAxMi42NTYgNzUuMDIwOCAxNC4yNzczIDc2LjIxNTUgMTYuMzY4Qzc3LjQ5NTUgMTQuNDA1MyA3OS4xODA4IDEyLjgyNjcgODEuMjcxNSAxMS42MzJDODMuMzYyMiAxMC4zOTQ3IDg1LjY2NjIgOS43NzYgODguMTgzNSA5Ljc3NlpNMTI0Ljg4IDQ2LjQ0OEMxMjEuNjM3IDQ2LjQ0OCAxMTguNzM2IDQ1LjkxNDcgMTE2LjE3NiA0NC44NDhDMTEzLjY1OSA0My43Mzg3IDExMS42NTMgNDIuMjQ1MyAxMTAuMTYgNDAuMzY4QzEwOC43MDkgMzguNDQ4IDEwNy44OTkgMzYuMjkzMyAxMDcuNzI4IDMzLjkwNEgxMTkuODg4QzEyMC4wNTkgMzUuMDU2IDEyMC41OTIgMzUuOTUyIDEyMS40ODggMzYuNTkyQzEyMi4zODQgMzcuMjMyIDEyMy40OTMgMzcuNTUyIDEyNC44MTYgMzcuNTUyQzEyNS44NCAzNy41NTIgMTI2LjY1MSAzNy4zMzg3IDEyNy4yNDggMzYuOTEyQzEyNy44NDUgMzYuNDg1MyAxMjguMTQ0IDM1LjkzMDcgMTI4LjE0NCAzNS4yNDhDMTI4LjE0NCAzNC4zNTIgMTI3LjY1MyAzMy42OTA3IDEyNi42NzIgMzMuMjY0QzEyNS42OTEgMzIuODM3MyAxMjQuMDY5IDMyLjM2OCAxMjEuODA4IDMxLjg1NkMxMTkuMjQ4IDMxLjM0NCAxMTcuMTE1IDMwLjc2OCAxMTUuNDA4IDMwLjEyOEMxMTMuNzAxIDI5LjQ4OCAxMTIuMjA4IDI4LjQ0MjcgMTEwLjkyOCAyNi45OTJDMTA5LjY5MSAyNS41NDEzIDEwOS4wNzIgMjMuNTc4NyAxMDkuMDcyIDIxLjEwNEMxMDkuMDcyIDE4Ljk3MDcgMTA5LjY0OCAxNy4wNTA3IDExMC44IDE1LjM0NEMxMTEuOTUyIDEzLjU5NDcgMTEzLjYzNyAxMi4yMDggMTE1Ljg1NiAxMS4xODRDMTE4LjExNyAxMC4xNiAxMjAuODI3IDkuNjQ4IDEyMy45ODQgOS42NDhDMTI4LjY3NyA5LjY0OCAxMzIuMzY4IDEwLjggMTM1LjA1NiAxMy4xMDRDMTM3Ljc0NCAxNS40MDggMTM5LjMwMSAxOC40MzczIDEzOS43MjggMjIuMTkySDEyOC40QzEyOC4xODcgMjEuMDQgMTI3LjY3NSAyMC4xNjUzIDEyNi44NjQgMTkuNTY4QzEyNi4wOTYgMTguOTI4IDEyNS4wNTEgMTguNjA4IDEyMy43MjggMTguNjA4QzEyMi43MDQgMTguNjA4IDEyMS45MTUgMTguOCAxMjEuMzYgMTkuMTg0QzEyMC44NDggMTkuNTY4IDEyMC41OTIgMjAuMTAxMyAxMjAuNTkyIDIwLjc4NEMxMjAuNTkyIDIxLjYzNzMgMTIxLjA4MyAyMi4yOTg3IDEyMi4wNjQgMjIuNzY4QzEyMy4wNDUgMjMuMTk0NyAxMjQuNjI0IDIzLjY0MjcgMTI2LjggMjQuMTEyQzEyOS40MDMgMjQuNjY2NyAxMzEuNTU3IDI1LjI4NTMgMTMzLjI2NCAyNS45NjhDMTM1LjAxMyAyNi42NTA3IDEzNi41MjggMjcuNzYgMTM3LjgwOCAyOS4yOTZDMTM5LjEzMSAzMC43ODkzIDEzOS43OTIgMzIuODM3MyAxMzkuNzkyIDM1LjQ0QzEzOS43OTIgMzcuNTMwNyAxMzkuMTczIDM5LjQwOCAxMzcuOTM2IDQxLjA3MkMxMzYuNzQxIDQyLjczNiAxMzUuMDEzIDQ0LjA1ODcgMTMyLjc1MiA0NS4wNEMxMzAuNTMzIDQ1Ljk3ODcgMTI3LjkwOSA0Ni40NDggMTI0Ljg4IDQ2LjQ0OFpNMTgyLjY5NSAxMC4wOTZWNDZIMTcwLjA4N1Y0MC44OEMxNjkuMDIgNDIuNTAxMyAxNjcuNTQ4IDQzLjgyNCAxNjUuNjcxIDQ0Ljg0OEMxNjMuNzk0IDQ1LjgyOTMgMTYxLjYzOSA0Ni4zMiAxNTkuMjA3IDQ2LjMyQzE1NS4wMjYgNDYuMzIgMTUxLjcxOSA0NC45NTQ3IDE0OS4yODcgNDIuMjI0QzE0Ni44OTggMzkuNDUwNyAxNDUuNzAzIDM1LjY5NiAxNDUuNzAzIDMwLjk2VjEwLjA5NkgxNTguMTgzVjI5LjM2QzE1OC4xODMgMzEuNDA4IDE1OC43MTYgMzMuMDI5MyAxNTkuNzgzIDM0LjIyNEMxNjAuODkyIDM1LjM3NiAxNjIuMzQzIDM1Ljk1MiAxNjQuMTM1IDM1Ljk1MkMxNjUuOTcgMzUuOTUyIDE2Ny40MiAzNS4zNzYgMTY4LjQ4NyAzNC4yMjRDMTY5LjU1NCAzMy4wMjkzIDE3MC4wODcgMzEuNDA4IDE3MC4wODcgMjkuMzZWMTAuMDk2SDE4Mi42OTVaTTIwMS43MzggMzUuNTY4SDIxNy4wMzRWNDZIMTg3LjkxNFYzNi4wOEwyMDIuMTg2IDIwLjUyOEgxODguMDQyVjEwLjA5NkgyMTYuNTIyVjIwLjAxNkwyMDEuNzM4IDM1LjU2OFpNMjI4LjM1MiA0Ni41MTJDMjI2LjEzMyA0Ni41MTIgMjI0LjM0MSA0NS45MTQ3IDIyMi45NzYgNDQuNzJDMjIxLjY1MyA0My40ODI3IDIyMC45OTIgNDEuOTI1MyAyMjAuOTkyIDQwLjA0OEMyMjAuOTkyIDM4LjE3MDcgMjIxLjY1MyAzNi42MTMzIDIyMi45NzYgMzUuMzc2QzIyNC4zNDEgMzQuMTM4NyAyMjYuMTMzIDMzLjUyIDIyOC4zNTIgMzMuNTJDMjMwLjUyOCAzMy41MiAyMzIuMjc3IDM0LjEzODcgMjMzLjYgMzUuMzc2QzIzNC45NjUgMzYuNjEzMyAyMzUuNjQ4IDM4LjE3MDcgMjM1LjY0OCA0MC4wNDhDMjM1LjY0OCA0MS44ODI3IDIzNC45NjUgNDMuNDE4NyAyMzMuNiA0NC42NTZDMjMyLjI3NyA0NS44OTMzIDIzMC41MjggNDYuNTEyIDIyOC4zNTIgNDYuNTEyWk0yNzguMjU4IDEwLjA5NlY0NkgyNjUuNjVWNDAuODhDMjY0LjU4MyA0Mi41MDEzIDI2My4xMTEgNDMuODI0IDI2MS4yMzQgNDQuODQ4QzI1OS4zNTYgNDUuODI5MyAyNTcuMjAyIDQ2LjMyIDI1NC43NyA0Ni4zMkMyNTAuNTg4IDQ2LjMyIDI0Ny4yODIgNDQuOTU0NyAyNDQuODUgNDIuMjI0QzI0Mi40NiAzOS40NTA3IDI0MS4yNjYgMzUuNjk2IDI0MS4yNjYgMzAuOTZWMTAuMDk2SDI1My43NDZWMjkuMzZDMjUzLjc0NiAzMS40MDggMjU0LjI3OSAzMy4wMjkzIDI1NS4zNDYgMzQuMjI0QzI1Ni40NTUgMzUuMzc2IDI1Ny45MDYgMzUuOTUyIDI1OS42OTggMzUuOTUyQzI2MS41MzIgMzUuOTUyIDI2Mi45ODMgMzUuMzc2IDI2NC4wNSAzNC4yMjRDMjY1LjExNiAzMy4wMjkzIDI2NS42NSAzMS40MDggMjY1LjY1IDI5LjM2VjEwLjA5NkgyNzguMjU4Wk0yOTcuMzAxIDM1LjU2OEgzMTIuNTk3VjQ2SDI4My40NzdWMzYuMDhMMjk3Ljc0OSAyMC41MjhIMjgzLjYwNVYxMC4wOTZIMzEyLjA4NVYyMC4wMTZMMjk3LjMwMSAzNS41NjhaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
              alt="delever"
            />
            <div className=" bg-blue-200 text-blue-500 gap-1 items-center flex py-1 px-4 rounded-2xl w-[117px] mb-8">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDdMMTIgMTNMMjEgNyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="icon delever" />
              <span>Delivery</span>
            </div>
          </div>
          <p className="mb-4 md:mb-[26px] max-w-[500px] leading-[30px] md:leading-10 text-[16px] md:text-[24px] font-medium">Smsuz.uz - It is a platform for bulk SMS messaging.</p>
          <h4 className=" text-[24px] font-semibold">What we did?</h4>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-[15px] my-4 md:my-10">
            {uxCards.map((item) => {
              return <Card bg={"bacground"} img={item.img} title={item.title} key={item.id} />;
            })}
          </div>
        </div>
          <div className="max-w-[541px] rounded-3xl flex items-center   bg-cover bg-no-repeat bg-center h-[300px] mb-4 md:h-[407px]" style={{ backgroundImage: `url(${bgMobile})` }}>
            <img src={desktop} alt="destop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sms;
