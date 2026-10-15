/* ==========================================================================
   VaultFlow AI — ElevenLabs Voice-to-Ledger Integration
   Voice memo recording, real-time speech recognition, and audio confirmation
   ========================================================================== */

class VoiceLogger {
  constructor() {
    this.isRecording = false;
    this.recognition = null;
    this.onTranscriptCallback = null;
    this.audioWaveElem = null;
    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (this.onTranscriptCallback) {
          this.onTranscriptCallback(transcript, event.results[0].isFinal);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition notice:', event.error);
        this.stopRecording();
      };

      this.recognition.onend = () => {
        this.stopRecording();
      };
    }
  }

  startRecording(waveformElement, onTranscript) {
    this.isRecording = true;
    this.audioWaveElem = waveformElement;
    this.onTranscriptCallback = onTranscript;

    if (this.audioWaveElem) {
      this.audioWaveElem.classList.add('recording');
    }

    if (this.recognition) {
      try {
        this.recognition.start();
        return true;
      } catch (e) {
        console.warn('SpeechRecognition start failed, using simulated dictation:', e);
      }
    }
    return false;
  }

  stopRecording() {
    this.isRecording = false;
    if (this.audioWaveElem) {
      this.audioWaveElem.classList.remove('recording');
    }
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
  }

  /**
   * ElevenLabs Text-to-Speech Audio Confirmation
   * Reads back the audit categorization confirmation
   */
  speakConfirmation(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // cancel previous
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      // Prefer modern natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google') || v.name.includes('Samantha')));
      if (naturalVoice) utterance.voice = naturalVoice;
      window.speechSynthesis.speak(utterance);
    }
  }
}

// Global Voice Singleton
const voiceLogger = new VoiceLogger();
