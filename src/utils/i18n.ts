export type Language = 'en' | 'ko' | 'es' | 'ja' | 'zh';

export const LANGUAGES: Record<Language, string> = {
  en: 'English',
  ko: '한국어',
  es: 'Español',
  ja: '日本語',
  zh: '简体中文'
};

export const TRANSLATIONS: Record<string, Record<Language, string>> = {
  // Navigation / Headers
  'nav-ascii': {
    en: 'ASCII Art',
    ko: 'ASCII 아트',
    es: 'Arte ASCII',
    ja: 'ASCIIアート',
    zh: 'ASCII 艺术'
  },
  'nav-braille': {
    en: 'Braille Art',
    ko: '점자 아트',
    es: 'Arte Braille',
    ja: '点字アート',
    zh: '盲文艺术'
  },
  'nav-combined': {
    en: 'Combined',
    ko: '통합 변환기',
    es: 'Combinado',
    ja: '複合ツール',
    zh: '混合套件'
  },
  'nav-about': {
    en: 'About Us',
    ko: '소개',
    es: 'Sobre Nosotros',
    ja: '概要',
    zh: '关于我们'
  },
  'nav-privacy': {
    en: 'Privacy Policy',
    ko: '개인정보처리방침',
    es: 'Política de Privacidad',
    ja: 'プライバシーポリシー',
    zh: '隐私政策'
  },
  'nav-contact': {
    en: 'Contact',
    ko: '문의하기',
    es: 'Contacto',
    ja: 'お問い合わせ',
    zh: '联系'
  },

  // Titles & Subtitles
  'ascii-title': {
    en: 'Image to <span class="gradient-text">ASCII Art</span> Generator',
    ko: '이미지 <span class="gradient-text">ASCII 아트</span> 변환기',
    es: 'Generador de <span class="gradient-text">Arte ASCII</span> a Imagen',
    ja: '画像から <span class="gradient-text">ASCIIアート</span> 変換',
    zh: '图片至 <span class="gradient-text">ASCII 艺术</span> 生成器'
  },
  'ascii-subtitle': {
    en: 'Convert color or black-and-white photos into classic text-based character art directly in your browser.',
    ko: '컬러 또는 흑백 사진을 브라우저에서 직접 클래식 텍스트 기반 캐릭터 아트로 변환하세요.',
    es: 'Convierte fotos en color o en blanco y negro en arte clásico basado en texto directamente en tu navegador.',
    ja: 'カラーまたは白黒写真をブラウザで直接クラシックなテキストアートに変換します。',
    zh: '在浏览器中直接将彩色或黑白照片转换为经典文本字符艺术。'
  },
  'braille-title': {
    en: 'Image to <span class="gradient-text">Braille Art</span> Generator',
    ko: '이미지 <span class="gradient-text">점자 아트</span> 변환기',
    es: 'Generador de <span class="gradient-text">Arte Braille</span> a Imagen',
    ja: '画像から <span class="gradient-text">点字アート</span> 変換',
    zh: '图片至 <span class="gradient-text">盲文艺术</span> 生成器'
  },
  'braille-subtitle': {
    en: 'Convert photos into high-resolution Braille unicode dot glyph matrix art. Works client-side in seconds.',
    ko: '사진을 고해상도 유니코드 점자 글리프 매트릭스 아트로 변환하세요. 클라이언트 사이드에서 몇 초 만에 작동합니다.',
    es: 'Convierte fotos en arte de matriz de glifos de puntos braille de alta resolución. Funciona en segundos en el navegador.',
    ja: '写真を高解像度の点字コードアートに変換します。ブラウザ側で瞬時に動作します。',
    zh: '将照片转换为高分辨率盲文 Unicode 点阵艺术。几秒内完全在本地浏览器端处理。'
  },
  'combined-title': {
    en: 'Combined <span class="gradient-text">Text Art</span> Generator',
    ko: '통합 <span class="gradient-text">텍스트 아트</span> 변환기',
    es: 'Generador de <span class="gradient-text">Arte de Texto</span> Combinado',
    ja: '複合 <span class="gradient-text">テキストアート</span> 生成器',
    zh: '混合 <span class="gradient-text">文本艺术</span> 套件'
  },
  'combined-subtitle': {
    en: 'Import an image and switch fluidly between ASCII character ramps and Unicode Braille matrices with full image correction sliders.',
    ko: '이미지를 불러와 이미지 보정 슬라이더와 함께 ASCII 캐릭터 램프와 유니코드 점자 매트릭스를 자유롭게 전환하며 변환해보세요.',
    es: 'Importa una imagen y cambia fluidamente entre rampas de caracteres ASCII y matrices Braille Unicode con controles deslizantes.',
    ja: '画像を読み込み、各種スライダーで補正しながら、ASCIIと点字を自由に切り替えて変換できます。',
    zh: '导入图像，并在 ASCII 字符斜坡和 Unicode 盲文矩阵之间流畅切换，配备完整的图像校正滑块。'
  },

  // Generator Controls
  'control-title': {
    en: 'Generator Controls',
    ko: '변환 컨트롤',
    es: 'Controles del Generador',
    ja: 'ジェネレーター設定',
    zh: '生成器控制'
  },
  'control-width': {
    en: 'Columns (Width)',
    ko: '가로 열 (너비)',
    es: 'Columnas (Ancho)',
    ja: '列数 (幅)',
    zh: '列数 (宽度)'
  },
  'control-brightness': {
    en: 'Brightness',
    ko: '밝기',
    es: 'Brillo',
    ja: '明るさ',
    zh: '亮度'
  },
  'control-contrast': {
    en: 'Contrast',
    ko: '대비',
    es: 'Contraste',
    ja: 'コントラスト',
    zh: '对比度'
  },
  'control-invert': {
    en: 'Invert Luminance / Colors',
    ko: '밝기 및 색상 반전',
    es: 'Invertir Luminancia / Colores',
    ja: '輝度・色の反転',
    zh: '反转亮度和颜色'
  },
  'control-aspect': {
    en: 'Preserve Visual Aspect',
    ko: '가로세로 비율 유지',
    es: 'Preservar Aspecto Visual',
    ja: '比率を維持する',
    zh: '保持视觉比例'
  },
  'control-color': {
    en: 'Color Output (HTML)',
    ko: '컬러 출력 (HTML)',
    es: 'Salida a Color (HTML)',
    ja: 'カラー出力 (HTML)',
    zh: '彩色输出 (HTML)'
  },
  'control-threshold': {
    en: 'Dot Contrast Threshold',
    ko: '점 대비 임계값',
    es: 'Umbral de Contraste de Puntos',
    ja: 'しきい値',
    zh: '点对比度阈值'
  },
  'control-density': {
    en: 'Character Density',
    ko: '글자 밀도',
    es: 'Densidad de Caracteres',
    ja: '文字の密度',
    zh: '字符密度'
  },

  // Dropdown options
  'option-simple': {
    en: 'Simple Ramp (10 characters)',
    ko: '단순한 램프 (10자)',
    es: 'Rampa Simple (10 caracteres)',
    ja: 'シンプル (10文字)',
    zh: '简单斜坡 (10 字符)'
  },
  'option-standard': {
    en: 'Standard Ramp (69 characters)',
    ko: '표준 램프 (69자)',
    es: 'Rampa Estándar (69 caracteres)',
    ja: '標準 (69文字)',
    zh: '标准斜坡 (69 字符)'
  },
  'option-detailed': {
    en: 'Detailed Ramp (73 characters)',
    ko: '상세한 램프 (73자)',
    es: 'Rampa Detallada (73 caracteres)',
    ja: '詳細 (73文字)',
    zh: '详细斜坡 (73 字符)'
  },
  'option-mode-ascii': {
    en: 'ASCII Art',
    ko: 'ASCII 아트',
    es: 'Arte ASCII',
    ja: 'ASCIIアート',
    zh: 'ASCII 艺术'
  },
  'option-mode-braille': {
    en: 'Braille Art',
    ko: '점자 아트',
    es: 'Arte Braille',
    ja: '点字アート',
    zh: '盲文艺术'
  },

  // Preview Headers & Placeholders
  'original-preview': {
    en: 'Original Image Preview',
    ko: '원본 이미지 미리보기',
    es: 'Vista Previa de Imagen Original',
    ja: '元の画像プレビュー',
    zh: '原始图像预览'
  },
  'remove-image': {
    en: 'Remove',
    ko: '제거',
    es: 'Eliminar',
    ja: '削除',
    zh: '移除'
  },
  'output-title': {
    en: 'Generated Text Art',
    ko: '생성된 텍스트 아트',
    es: 'Arte de Texto Generado',
    ja: '生成されたテキストアート',
    zh: '生成的文本艺术'
  },
  'upload-placeholder': {
    en: 'Drag & drop your image here or browse',
    ko: '여기에 이미지를 드래그 앤 드롭하거나 찾아보기',
    es: 'Arrastra y suelta tu imagen aquí o explora',
    ja: 'ここに画像をドラッグ＆ドロップするか、ファイルを選択してください',
    zh: '拖放图像至此或 浏览'
  },
  'upload-subtext': {
    en: 'Supports PNG, JPG, WEBP',
    ko: 'PNG, JPG, WEBP 지원',
    es: 'Soporta PNG, JPG, WEBP',
    ja: 'PNG, JPG, WEBP 対応',
    zh: '支持 PNG, JPG, WEBP'
  },
  'placeholder-text': {
    en: 'Please upload an image to generate text art.',
    ko: '텍스트 아트를 생성하려면 이미지를 업로드해 주세요.',
    es: 'Por favor sube una imagen para generar arte de texto.',
    ja: '画像をアップロードしてテキストアートを生成してください。',
    zh: '请上传图像以生成文本艺术。'
  },

  // Buttons & Copy/Download
  'btn-copy': {
    en: 'Copy',
    ko: '복사',
    es: 'Copiar',
    ja: 'コピー',
    zh: '复制'
  },
  'btn-download': {
    en: 'Download',
    ko: '다운로드',
    es: 'Descargar',
    ja: 'ダウンロード',
    zh: '下载'
  },
  'btn-reset': {
    en: 'Reset',
    ko: '초기화',
    es: 'Restablecer',
    ja: 'リセット',
    zh: '重置'
  },
  'btn-copied': {
    en: 'Copied!',
    ko: '복사 완료!',
    es: '¡Copiado!',
    ja: 'コピーしました！',
    zh: '已复制！'
  },

  // Footer & Secure
  'footer-desc': {
    en: 'Premium browser-based tool to convert images into stunning ASCII and Braille text art. 100% private, client-side, and free.',
    ko: '이미지를 놀라운 ASCII 및 점자 텍스트 아트로 변환하는 프리미엄 브라우저 기반 도구입니다. 100% 개인정보가 보호되며, 클라이언트 사이드 전용이고 무료입니다.',
    es: 'Herramienta premium basada en navegador para convertir imágenes en impresionante arte de texto ASCII y Braille. 100% privado, del lado del cliente y gratuito.',
    ja: '画像を美しいASCIIや点字テキストアートに変換する高品質なブラウザツールです。完全にプライベートなクライアントサイド実行で、無料で使用できます。',
    zh: '精美的浏览器端图像至 ASCII 和盲文艺术转换工具。100% 本地处理，安全且免费。'
  },
  'footer-secure': {
    en: 'Fully Secure Client-Side Only',
    ko: '완벽히 안전한 클라이언트 전용',
    es: 'Totalmente Seguro Solo del Lado del Cliente',
    ja: '完全に安全なクライアントサイド専用',
    zh: '完全本地安全处理'
  },
  'footer-generators': {
    en: 'Generators',
    ko: '변환기 목록',
    es: 'Generadores',
    ja: 'ツール一覧',
    zh: '生成器'
  },
  'footer-resources': {
    en: 'Resources',
    ko: '자료 및 가이드',
    es: 'Recursos',
    ja: 'ドキュメント',
    zh: '资源'
  },
  'footer-legal': {
    en: 'Legal & Info',
    ko: '법적 고지 및 정보',
    es: 'Legal e Información',
    ja: '法的情報',
    zh: '法律与信息'
  },
  'control-mode': {
    en: 'Output Mode',
    ko: '출력 모드',
    es: 'Modo de Salida',
    ja: '出力モード',
    zh: '输出模式'
  },
  'alert-error': {
    en: 'Error loading image. Please try another file.',
    ko: '이미지를 불러오는 중 오류가 발생했습니다. 다른 파일을 시도해 주세요.',
    es: 'Error al cargar la imagen. Por favor intenta con otro archivo.',
    ja: '画像の読み込み中にエラーが発生しました。別のファイルを試してください。',
    zh: '加载图像时出错。请尝试其他文件。'
  }
};
