import { Order } from "../models/indexModels.js";
import { OrderProducts } from "../models/indexModels.js";
import { Menu } from "../models/indexModels.js";

export const OrderController = {
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllText(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      const responseText = orders.map(order => 
        `Id de la orden: ${order.id}\nTotal: ${order.totalPrice.toLocaleString("es-CO")} pesos\nMetodo de pago:${order.paymentMethod}\nItems:\n` +
        order.OrderProducts.map(op => 
          `- ${op.Menu.name}: Cantidad: ${op.quantity}, Precio al momento de la venta: ${op.priceAtPurchase.toLocaleString("es-CO")} pesos`
        ).join('\n')
      ).join('\n\n');

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const order = await Order.findByPk(req.params.id, {
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getByIdText(req, res) {
    try {
      const order = await Order.findByPk(req.params.id, {
        include: [{ model: OrderProducts, include: [Menu] }],
      });

      if (!order)
        return res.status(404).send("Orden no encontrada");

      const responseText = `Id de la orden: ${order.id}\nTotal: ${order.totalPrice.toLocaleString("es-CO")} pesos\nMetodo de pago:${order.paymentMethod}\nItems:\n` +
        order.OrderProducts.map(op => 
          `- ${op.Menu.name}: Cantidad: ${op.quantity}, Precio al momento de la venta: ${op.priceAtPurchase.toLocaleString("es-CO")} pesos`
        ).join('\n');

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  

  async createWithProducts(req, res) {
    try {
      const { products, ...orderData } = req.body; 
      const order = await Order.create(orderData);
      for (const product of products) {
        await OrderProducts.create({
          idOrder: order.id, 
          idMenu: product.idMenu,
          quantity: product.quantity,
          priceAtPurchase: product.priceAtPurchase,
          createdAt: new Date()
        });
      }
      const createdOrder = await Order.findByPk(order.id, {
        include: [{ model: OrderProducts, include: [Menu] }],
      });
      res.json(createdOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createWithProductsText(req, res) {
    try {
      const { products, ...orderData } = req.body;
      const order = await Order.create(orderData);
      for (const product of products) {
        await OrderProducts.create({
          idOrder: order.id, 
          idMenu: product.idMenu,
          quantity: product.quantity,
          priceAtPurchase: product.priceAtPurchase,
          createdAt: new Date()
        });
      }
      const createdOrder = await Order.findByPk(order.id, {
        include: [{ model: OrderProducts, include: [Menu] }],
      });
      const responseText = `Id de la orden: ${createdOrder.id}\nTotal: ${createdOrder.totalPrice.toLocaleString("es-CO")} pesos\n Metodo de pago:${createdOrder.paymentMethod}\nItems:\n` +
        createdOrder.OrderProducts.map(op => 
          `- ${op.Menu.name}: Cantidad: ${op.quantity}, Precio al momento de la venta: ${op.priceAtPurchase.toLocaleString("es-CO")} pesos`
        ).join('\n');

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.send(responseText);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } 
  },

  async update(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.update(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      await order.destroy();
      res.json({ message: "Order deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
