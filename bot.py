import os
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Legge il token dalla variabile d'ambiente
TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

WEB_APP_URL = "https://wdwd4000.github.io/hash-valley-vetrina/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Apri Hash Valley Vetrina", web_app={"url": WEB_APP_URL})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Benvenuto! Clicca il pulsante qui sotto per aprire la mini app:", 
        reply_markup=reply_markup
    )

if __name__ == "__main__":
    if not TOKEN:
        raise ValueError("ERRORE: la variabile d'ambiente TELEGRAM_BOT_TOKEN non è impostata!")
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("Bot avviato...")
    app.run_polling()
