import './style.css';

const toggle_menu = (event: Event) => {
  event.preventDefault();
  const menu_item = event.target as HTMLElement | null;

  if (!menu_item) return;

  const menu_item_parent = menu_item.parentElement!;
  const is_expanded = menu_item_parent.getAttribute('aria-expanded') === 'true';
  menu_item_parent.setAttribute('aria-expanded', String(!is_expanded));
}

document.querySelectorAll(".sub-menu").forEach( anchor => anchor.addEventListener('click', toggle_menu));
