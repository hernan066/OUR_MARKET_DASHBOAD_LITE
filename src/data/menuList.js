export const menuList = [
  {
    name: "Dashboard",
    icon: "loyalty",
    key: "dashboard",
    subRoutes: [
      {
        name: "Totales",
        icon: "signal_cellular_alt_icon",
        url: "/dashboard/totales",
      },
    ],
  },
  {
    name: "Usuarios",
    icon: "person",
    key: "usuarios",
    subRoutes: [
      {
        name: "Lista usuarios",
        icon: "format_list_bulleted_icon",
        url: "/usuarios/lista",
      },
    ],
  },
  {
    name: "Productos",
    icon: "shoppingCartIcon",
    key: "productos",
    subRoutes: [
      {
        name: "Productos",
        icon: "format_list_bulleted_icon",
        url: "/productos",
      },
      {
        name: "Proveedores",
        icon: "factory",
        url: "/productos/proveedores/lista",
      },
      {
        name: "Stock",
        icon: "list_alt",
        url: "/productos/stock/lista",
      },
    ],
  },
  {
    name: "Clientes",
    icon: "perm_contact_calendar_icon",
    key: "clientes",
    subRoutes: [
      {
        name: "Nuevo cliente",
        icon: "person_add_alt1_icon",
        url: "/clientes/nuevo",
      },
      {
        name: "Lista clientes",
        icon: "format_list_bulleted_icon",
        url: "/clientes/lista",
      },
      {
        name: "Direcciones",
        icon: "holiday_village_icon",
        url: "/clientes/direcciones/lista",
      },
      {
        name: "Localización",
        icon: "location_on_icon",
        url: "/clientes/localizacion",
      },
    ],
  },
  {
    name: "Ordenes",
    icon: "view_list_icon",
    key: "ordenes",
    subRoutes: [
      {
        name: "Crear orden local",
        icon: "add_circle_outline_icon",
        url: "/ordenes/nueva-local",
      },

      {
        name: "Lista ordenes",
        icon: "format_list_bulleted_icon",
        url: "/ordenes/lista",
      },
    ],
  },
  {
    name: "Gastos",
    icon: "assignment_returned_icon",
    key: "gastos",
    subRoutes: [
      {
        name: "Nuevo gasto",
        icon: "add_circle_outline_icon",
        url: "/gastos/nuevo",
      },

      {
        name: "Lista gastos",
        icon: "format_list_bulleted_icon",
        url: "/gastos/lista",
      },
    ],
  },

  {
    name: "Reportes",
    icon: "assessment_icon",
    key: "reportes",
    subRoutes: [
      {
        name: "Rango de ventas",
        icon: "format_list_bulleted_icon",
        url: "/reportes/productos-vendidos-por-rango",
      },
    ],
  },
];
