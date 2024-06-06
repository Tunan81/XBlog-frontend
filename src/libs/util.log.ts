class Logger {
  static typeColor(type: string = 'default'): string {
    let color: string = ''
    switch (type) {
      case 'default':
        color = '#35495E'
        break
      case 'primary':
        color = '#3488ff'
        break
      case 'success':
        color = '#43B883'
        break
      case 'warning':
        color = '#e6a23c'
        break
      case 'danger':
        color = '#f56c6c'
        break
      default:
        break
    }
    return color
  }

  static capsule(title: string, info: string, type: string = 'primary'): void {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${this.typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    )
  }

  static colorful(textArr: { text: string; type?: string }[]): void {
    console.log(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${this.typeColor(t.type)};`)
    )
  }

  static default(text: string): void {
    this.colorful([{ text }])
  }

  static primary(text: string): void {
    this.colorful([{ text, type: 'primary' }])
  }

  static success(text: string): void {
    this.colorful([{ text, type: 'success' }])
  }

  static warning(text: string): void {
    this.colorful([{ text, type: 'warning' }])
  }

  static danger(text: string): void {
    this.colorful([{ text, type: 'danger' }])
  }

  static admin(): void {
    const info = `
        ___       __    __  __                            
__ |     / /_____ \\/ /_________  _______________ _
__ | /| / /_  _ \\_  /_  __ \\  / / /_  __ \\_  __ \`/
__ |/ |/ / /  __/  / / /_/ / /_/ /_  / / /  /_/ / 
____/|__/  \\___//_/  \\____/\\__,_/ /_/ /_/_\\__, /  
                                         /____/   
    `
    this.colorful([{ text: info, type: 'primary' }])
  }
}

export default Logger
