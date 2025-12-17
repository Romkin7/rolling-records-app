# exit on failure
set -e
echo "🛠️ Building design tokens..."
echo "🗑️ Removing old CSS files..."
rm -rfv ./app/assets/css
mkdir -p ./app/assets/css
echo "🛠️ 🎨 Running Style Dictionary build colors..."
npm run style-dictionary-build-colors
echo "🛠️ 📏 Running Style Dictionary build sizes..."
npm run style-dictionary-build-sizes
echo "🛠️ 📐 Running Style Dictionary build layouts..."
npm run style-dictionary-build-layouts
echo "🛠️ 📐 Running Style Dictionary build typography..."
npm run style-dictionary-build-typography
echo "🎉 Design tokens built successfully."
