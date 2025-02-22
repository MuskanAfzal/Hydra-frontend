import React from 'react';
import './LogosSection.css';

export default function LogosSection() {
    return (
        <div className="logo-banner">
          <img id='unreal-logo' src="/images/unreal.png" alt="Unreal Engine" />
          <img src="/images/unity.png" alt="Unity" />
          <img src="/images/oculuss.png" alt="Oculus" />
          <img src="/images/vive.png" alt="Vive" />
        </div>
    );
}
